
import React, { useState, useEffect } from 'react';
import { MusicNoteIcon } from './icons/MusicNoteIcon';
import { XIcon } from './icons/XIcon';
import { SparklesIcon } from './icons/SparklesIcon';

const NewsletterBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('newsletterDismissed');
    if (!isDismissed) {
      // Add a small delay to let the page load before showing the banner
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('newsletterDismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted for unreleased track:', email);
    setIsSubmitted(true);
    setEmail('');
    sessionStorage.setItem('newsletterDismissed', 'true'); // Also dismiss on successful submit
    setTimeout(() => {
        setIsVisible(false);
    }, 4000); // Hide banner after 4 seconds
  };
  
  if (!isVisible) {
      return null;
  }

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-dark-red/20 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 border-b border-primary-red/50">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex items-center gap-x-3">
            <MusicNoteIcon className="h-6 w-6 text-primary-red animate-pulse" aria-hidden="true" />
            <p className="text-sm leading-6 text-paper-light">
                <strong className="font-semibold uppercase font-mono">Get The Unreleased</strong>
                <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                    <circle cx={1} cy={1} r={1} />
                </svg>
                Sign up for an exclusive track, straight from the vault.
            </p>
        </div>
        {isSubmitted ? (
             <div className="flex items-center justify-center gap-2" style={{minHeight: '44px'}}>
                <SparklesIcon className="h-6 w-6 text-primary-red" />
                <p className="text-primary-red font-semibold">Check your inbox. The track is on its way.</p>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="flex items-center gap-x-2">
                <label htmlFor="email-address-banner" className="sr-only">
                    Email address
                </label>
                <input
                    id="email-address-banner"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-slate-900/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-primary-red sm:text-sm sm:leading-6 placeholder:text-slate-500"
                    placeholder="your.email@the.underground"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    type="submit"
                    className="flex-none rounded-md border-2 border-primary-red px-3.5 py-2 text-sm font-semibold text-primary-red shadow-sm hover:bg-primary-red hover:text-brand-black transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                >
                    Unlock
                </button>
            </form>
        )}
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleDismiss}>
          <span className="sr-only">Dismiss</span>
          <XIcon className="h-5 w-5 text-paper-light hover:text-primary-red" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default NewsletterBanner;
