
import React, { useEffect, useState } from 'react';
import { ToeTagIcon } from './icons/ToeTagIcon';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Wait for 2.5 seconds then start fade out
    const timer = setTimeout(() => {
      setIsFading(true);
      // Allow fade transition to finish before unmounting
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-black transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative w-full max-w-md p-8 flex flex-col items-center">
        <ToeTagIcon className="h-20 w-auto mb-8 animate-bounce" style={{ animationDuration: '2s' }} />
        
        <h1 className="text-3xl font-bold font-tech uppercase tracking-[0.2em] text-paper-light mb-2">
            System Initializing
        </h1>
        
        <div className="w-full h-24 relative bg-black border border-dark-green/30 rounded-md overflow-hidden shadow-[0_0_15px_rgba(46,139,87,0.2)]">
            {/* Grid lines */}
            <div className="absolute inset-0" style={{ 
                backgroundImage: 'linear-gradient(rgba(46, 139, 87, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 139, 87, 0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}></div>
            
            {/* The EKG Line Animation */}
            <div className="ekg-blip"></div>
        </div>
        
        <div className="mt-4 flex justify-between w-full text-xs font-tech text-primary-green/70">
            <span>VITAL SIGNS: STABLE</span>
            <span>BPM: 145</span>
            <span>LOADING SUBJECTS...</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
