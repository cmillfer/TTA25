
import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        className="group relative flex h-12 w-12 items-center justify-center bg-brand-black border-2 border-primary-red shadow-[0_0_10px_rgba(210,43,43,0.3)] transition-all duration-300 hover:bg-primary-red hover:shadow-[0_0_20px_rgba(210,43,43,0.6)] hover:-translate-y-1 active:translate-y-0"
        aria-label="Return to surface"
      >
        {/* Background glitch effect on hover */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-75"></div>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary-red group-hover:text-brand-black transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;
