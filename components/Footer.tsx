
import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { YouTubeIcon } from './icons/YouTubeIcon';
import { TikTokIcon } from './icons/TikTokIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { ShoppingBagIcon } from './icons/ShoppingBagIcon';

const socialLinks = [
  { name: 'YouTube', href: 'https://www.youtube.com/@ToeTagAwards', Icon: YouTubeIcon },
  { name: 'TikTok', href: 'https://tiktok.com/@toetagawards', Icon: TikTokIcon },
  { name: 'Instagram', href: 'https://instagram.com/toetagawards', Icon: InstagramIcon },
  { name: 'Facebook', href: 'https://facebook.com/ToeTagAwards', Icon: FacebookIcon },
  { name: 'X (Twitter)', href: 'https://x.com/ToeTagAwards', Icon: TwitterIcon },
  { name: 'Merch', href: 'https://etsy.com/shop/ToeTagAwardsStudios', Icon: ShoppingBagIcon },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-dark-red/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
            <div className="text-center">
               <h3 className="text-xl font-bold text-white uppercase font-mono mb-4">Connect With The Underground</h3>
            </div>

            <div className="flex justify-center flex-wrap gap-6">
                {socialLinks.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black rounded-sm"
                    title={name}
                  >
                    <span className="sr-only">{name}</span>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
            </div>
            <p className="mt-4 text-center text-xs text-slate-400 font-mono">
              &copy; {new Date().getFullYear()} Toe Tag Awards. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
