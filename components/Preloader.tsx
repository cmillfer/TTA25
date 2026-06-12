import React, { useEffect, useState } from 'react';
import { ToeTagIcon } from './icons/ToeTagIcon';
import { waitForAppReady } from '../utils/preloadAssets';

interface PreloaderProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  '> INITIALIZING CORE SYSTEMS...',
  '> SYNCING AUDIO BUFFER...',
  '> LOADING SUBJECT FILES...',
  '> CALIBRATING GLITCH MATRIX...',
  '> UPLINK READY',
];

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [bootIndex, setBootIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const bootTimer = window.setInterval(() => {
      setBootIndex((current) =>
        current < BOOT_LINES.length - 1 ? current + 1 : current
      );
    }, 450);

    let cancelled = false;

    waitForAppReady().then(() => {
      if (cancelled) return;
      window.clearInterval(bootTimer);
      setBootIndex(BOOT_LINES.length - 1);
      setIsExiting(true);
      window.setTimeout(() => {
        setIsFading(true);
        window.setTimeout(onComplete, 500);
      }, 280);
    });

    return () => {
      cancelled = true;
      window.clearInterval(bootTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`preloader-screen fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-black transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      } ${isExiting ? 'preloader-glitch-exit' : ''}`}
      aria-live="polite"
      aria-busy={!isFading}
    >
      <div className="relative w-full max-w-md p-8 flex flex-col items-center">
        <ToeTagIcon
          className="h-20 w-auto mb-8 animate-bounce"
          style={{ animationDuration: '2s' }}
        />

        <h1 className="text-3xl font-bold font-tech uppercase tracking-[0.2em] text-paper-light mb-2">
          System Initializing
        </h1>

        <div className="w-full h-24 relative bg-black border border-dark-green/30 rounded-md overflow-hidden shadow-[0_0_15px_rgba(46,139,87,0.2)] ekg-monitor">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(46, 139, 87, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 139, 87, 0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <div className="ekg-blip" aria-hidden="true" />
          <div className="ekg-pulse" aria-hidden="true" />
        </div>

        <p className="mt-4 w-full min-h-[1.25rem] text-left text-xs font-tech text-primary-green tracking-wide">
          {BOOT_LINES[bootIndex]}
        </p>

        <div className="mt-2 flex justify-between w-full text-xs font-tech text-primary-green/70">
          <span>VITAL SIGNS: STABLE</span>
          <span>BPM: 145</span>
          <span>{isExiting ? 'READY' : 'LOADING...'}</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;