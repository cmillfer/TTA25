import React, { useEffect, useRef } from 'react';
import {
  HERO_IMAGE_JPG,
  HERO_IMAGE_LEGACY,
  HERO_IMAGE_WEBP,
} from '../constants/hero';

interface HeroProps {
  onListenNowClick: () => void;
  onBookUsClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onListenNowClick, onBookUsClick }) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (bgRef.current) {
            bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    let mouseTicking = false;
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!mouseTicking) {
        window.requestAnimationFrame(() => {
          if (!titleRef.current) {
            mouseTicking = false;
            return;
          }

          const titleRect = titleRef.current.getBoundingClientRect();
          const titleCenterX = titleRect.left + titleRect.width / 2;
          const titleCenterY = titleRect.top + titleRect.height / 2;

          const distance = Math.sqrt(
            Math.pow(mouseX - titleCenterX, 2) +
              Math.pow(mouseY - titleCenterY, 2)
          );

          const maxDistance = window.innerWidth / 3;
          const proximity = Math.max(0, 1 - distance / maxDistance);

          const duration1 = 0.1 + (1 - proximity) * 2.4;
          const duration2 = 0.1 + (1 - proximity) * 1.4;

          titleRef.current.style.setProperty('--glitch-duration-1', `${duration1}s`);
          titleRef.current.style.setProperty('--glitch-duration-2', `${duration2}s`);

          mouseTicking = false;
        });
        mouseTicking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const currentHeroRef = heroRef.current;
    if (currentHeroRef) {
      currentHeroRef.addEventListener('mousemove', handleMouseMove);
    }

    if (titleRef.current) {
      titleRef.current.style.setProperty('--glitch-duration-1', '2.5s');
      titleRef.current.style.setProperty('--glitch-duration-2', '1.5s');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (currentHeroRef) {
        currentHeroRef.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="relative isolate overflow-hidden pt-14">
      <div
        ref={bgRef}
        className="absolute inset-0 -z-20 overflow-hidden"
      >
        <picture>
          <source srcSet={HERO_IMAGE_WEBP} type="image/webp" />
          <source srcSet={HERO_IMAGE_JPG} type="image/jpeg" />
          <img
            src={HERO_IMAGE_LEGACY}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            className="hero-bg-image"
          />
        </picture>
      </div>

      <div className="absolute inset-0 -z-10 hero-overlay grain-overlay" />

      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 px-4">
        <div className="text-center">
          <h1
            ref={titleRef}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl uppercase font-mono relative glitch"
            data-text="Toe Tag Awards"
          >
            Toe Tag Awards
          </h1>
          <p className="mt-8 text-lg leading-8 text-paper-light max-w-2xl mx-auto">
            Dynamic sounds from the underground. The latest mixes delivered with
            unmatched energy.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
            <button
              onClick={onListenNowClick}
              className="rounded-md border-2 border-primary-red px-5 py-3 text-sm font-semibold text-primary-red shadow-[0_0_15px_rgba(210,43,43,0.5)] hover:bg-primary-red hover:text-brand-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 transition-all duration-300"
            >
              Listen Now
            </button>
            <button
              onClick={onBookUsClick}
              className="rounded-md border-2 border-paper-light px-5 py-3 text-sm font-semibold text-paper-light hover:bg-paper-light hover:text-brand-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-all duration-300"
            >
              Book Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;