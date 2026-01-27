import React, { useState, useEffect } from 'react';
import { ToeTagIcon } from './icons/ToeTagIcon';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';

interface HeaderProps {
  onMusicClick: () => void;
  onAboutClick: () => void;
  onSocialsClick: () => void;
  onMerchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMusicClick, onAboutClick, onSocialsClick, onMerchClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleMusicClick = () => {
    onMusicClick();
    setIsMenuOpen(false);
  };
  const handleAboutClick = () => {
    onAboutClick();
    setIsMenuOpen(false);
  };
  const handleSocialsClick = () => {
    onSocialsClick();
    setIsMenuOpen(false);
  };
  const handleMerchClick = () => {
    onMerchClick();
    setIsMenuOpen(false);
  };
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-brand-black/75 border-b border-dark-red/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={handleHomeClick}
            >
              <ToeTagIcon className="h-8 w-auto text-paper-light group-hover:text-primary-red transition-colors duration-300"/>
              <span className="ml-3 text-lg font-bold uppercase font-mono tracking-wider text-paper-light group-hover:text-primary-red transition-colors duration-300">
                Toe Tag Awards
              </span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden sm:flex items-center space-x-8">
              <button
                onClick={onMusicClick}
                className="text-sm font-medium text-paper-light hover:text-primary-red transition-colors"
              >
                Music
              </button>
              <button
                onClick={onAboutClick}
                className="text-sm font-medium text-paper-light hover:text-primary-red transition-colors"
              >
                About
              </button>
              <button
                onClick={handleMerchClick}
                className="text-sm font-medium text-paper-light hover:text-primary-red transition-colors"
              >
                Merch
              </button>
              <button
                onClick={onSocialsClick}
                className="text-sm font-medium text-paper-light hover:text-primary-red transition-colors"
              >
                Follow
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-paper-light hover:text-primary-red hover:bg-dark-red/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-red"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-black/90 backdrop-blur-lg sm:hidden" id="mobile-menu">
          <div className="pt-24 px-4">
            <nav className="flex flex-col items-center space-y-8">
              <button
                onClick={handleMusicClick}
                className="text-2xl font-bold uppercase font-mono tracking-wider text-paper-light hover:text-primary-red transition-colors"
              >
                Music
              </button>
              <button
                onClick={handleAboutClick}
                className="text-2xl font-bold uppercase font-mono tracking-wider text-paper-light hover:text-primary-red transition-colors"
              >
                About
              </button>
              <button
                onClick={handleMerchClick}
                className="text-2xl font-bold uppercase font-mono tracking-wider text-paper-light hover:text-primary-red transition-colors"
              >
                Merch
              </button>
              <button
                onClick={handleSocialsClick}
                className="text-2xl font-bold uppercase font-mono tracking-wider text-paper-light hover:text-primary-red transition-colors"
              >
                Follow
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
