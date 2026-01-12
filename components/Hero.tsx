
import React, { useState, useEffect, useRef } from 'react';

interface HeroProps {
  onListenNowClick: () => void;
  onBookUsClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onListenNowClick, onBookUsClick }) => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!titleRef.current) return;

      const titleRect = titleRef.current.getBoundingClientRect();
      const titleCenterX = titleRect.left + titleRect.width / 2;
      const titleCenterY = titleRect.top + titleRect.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - titleCenterX, 2) + Math.pow(e.clientY - titleCenterY, 2)
      );

      const maxDistance = window.innerWidth / 3;
      const proximity = Math.max(0, 1 - distance / maxDistance);

      const duration1 = 0.1 + (1 - proximity) * 2.4; // Range from 0.1s to 2.5s
      const duration2 = 0.1 + (1 - proximity) * 1.4; // Range from 0.1s to 1.5s

      titleRef.current.style.setProperty('--glitch-duration-1', `${duration1}s`);
      titleRef.current.style.setProperty('--glitch-duration-2', `${duration2}s`);
    };

    window.addEventListener('scroll', handleScroll);
    const currentHeroRef = heroRef.current;
    if (currentHeroRef) {
      currentHeroRef.addEventListener('mousemove', handleMouseMove);
    }

    // Set initial calm state
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
            className="absolute inset-0 -z-10 bg-cover bg-no-repeat bg-center transition-transform duration-100 ease-out"
            style={{ 
                backgroundImage: `url(https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                transform: `translateY(${scrollY * 0.4}px)`
            }}
        ></div>
        <div className="absolute inset-0 -z-10 bg-brand-black/70 backdrop-blur-sm grain-overlay"></div>
      
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 px-4">
        <div className="text-center">
          <h1 
            ref={titleRef}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl uppercase font-mono relative glitch"
            data-text="Toe Tag Awards"
          >
            Toe Tag Awards
          </h1>
          <p className="mt-8 text-lg leading-8 text-paper-light">
            Dynamic sounds from the underground. The latest mixes delivered with unmatched energy.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
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