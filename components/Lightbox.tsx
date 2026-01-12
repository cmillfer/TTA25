
import React, { useEffect } from 'react';
import { TwitterIcon } from './icons/TwitterIcon';
import { FacebookIcon } from './icons/FacebookIcon';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
  streamUrl: string;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, imageSrc, imageAlt, title, streamUrl }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const encodedUrl = encodeURIComponent(streamUrl);
  const encodedTitle = encodeURIComponent(`Check out ${title} by Toe Tag Awards! 💀🔊`);

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-brand-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div 
        className="relative bg-brand-black ring-1 ring-dark-red/50 rounded-lg shadow-2xl w-full max-w-lg p-6 text-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-paper-light hover:text-primary-red transition-colors"
          aria-label="Close image viewer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img src={imageSrc} alt={imageAlt} className="w-full h-auto rounded-md shadow-lg aspect-square object-cover" />
        <h2 id="lightbox-title" className="mt-4 text-2xl font-bold uppercase font-mono text-white">{title}</h2>
        <p className="mt-1 text-sm text-paper-light/80">{imageAlt}</p>
        
        <a 
          href={streamUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 inline-block w-full rounded-md border-2 border-primary-red px-5 py-3 text-sm font-semibold text-primary-red shadow-[0_0_15px_rgba(210,43,43,0.5)] hover:bg-primary-red hover:text-brand-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 transition-all duration-300"
        >
          Stream This Track
        </a>

        {/* Share Section */}
        <div className="mt-6 border-t border-dark-red/30 pt-4">
            <p className="text-xs font-mono text-paper-light/60 uppercase mb-3 tracking-widest">Spread The Evidence</p>
            <div className="flex justify-center gap-6">
                <a
                    href={twitterShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-slate-400 hover:text-[#1DA1F2] transition-colors"
                    aria-label="Share on Twitter"
                >
                    <TwitterIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase">X / Twitter</span>
                </a>
                <a
                    href={facebookShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-slate-400 hover:text-[#1877F2] transition-colors"
                    aria-label="Share on Facebook"
                >
                    <FacebookIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase">Facebook</span>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
