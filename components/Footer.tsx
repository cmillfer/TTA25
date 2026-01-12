
import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { YouTubeIcon } from './icons/YouTubeIcon';
import { TikTokIcon } from './icons/TikTokIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { ShoppingBagIcon } from './icons/ShoppingBagIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-dark-red/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
            <div className="text-center">
               <h3 className="text-xl font-bold text-white uppercase font-mono mb-4">Connect With The Underground</h3>
            </div>

            <div className="flex justify-center flex-wrap gap-6">
                <a href="https://www.youtube.com/@ToeTagAwards" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-red transition-colors">
                    <span className="sr-only">YouTube</span>
                    <YouTubeIcon className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="https://tiktok.com/@toetagawards" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-red transition-colors">
                    <span className="sr-only">TikTok</span>
                    <TikTokIcon className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="https://instagram.com/toetagawards" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-red transition-colors">
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="https://facebook.com/ToeTagAwards" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-red transition-colors">
                    <span className="sr-only">Facebook</span>
                    <FacebookIcon className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="https://x.com/ToeTagAwards" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-red transition-colors">
                    <span className="sr-only">X (Twitter)</span>
                    <TwitterIcon className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="https://etsy.com/shop/ToeTagAwardsStudios" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-red transition-colors">
                    <span className="sr-only">Merch</span>
                    <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                </a>
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
