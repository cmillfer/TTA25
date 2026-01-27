
import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { YouTubeIcon } from './icons/YouTubeIcon';
import { TikTokIcon } from './icons/TikTokIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { ShoppingBagIcon } from './icons/ShoppingBagIcon';
import { SoundCloudIcon } from './icons/SoundCloudIcon';
import AnimateOnScroll from './AnimateOnScroll';

const socialLinks = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@thetoetagawards',
    Icon: YouTubeIcon,
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@thetoetagawards',
    Icon: TikTokIcon,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/thetoetagawards',
    Icon: InstagramIcon,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/thetoetagawards',
    Icon: FacebookIcon,
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/thetoetagawards',
    Icon: TwitterIcon,
  },
  {
    name: 'SoundCloud',
    href: 'https://soundcloud.com/thetoetagawards',
    Icon: SoundCloudIcon,
  },
  {
    name: 'Merch',
    href: 'https://www.etsy.com/shop/ToeTagAwardsStudios',
    Icon: ShoppingBagIcon,
  },
];

const Socials: React.FC = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase font-mono neon-text">
            Follow The Chaos
          </h2>
          <p className="mt-4 text-lg text-paper-light">
            Connect with us on every platform. No excuses.
          </p>
        </div>
      </AnimateOnScroll>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {socialLinks.map(({ name, href, Icon }, index) => (
          <AnimateOnScroll key={name} delay={index * 100}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 h-full bg-dark-red/10 rounded-lg border border-dark-red/50 hover:bg-dark-red/20 hover:border-primary-red transition-all duration-300 transform hover:-translate-y-1"
            >
              <Icon className="h-10 w-10 text-paper-light/80 group-hover:text-primary-red transition-colors" />
              <span className="mt-4 text-sm font-semibold uppercase font-mono tracking-wider text-paper-light group-hover:text-white">
                {name}
              </span>
            </a>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
};

export default Socials;
