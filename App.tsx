
import React, { useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Music from './components/Music';
import About from './components/About';
import Socials from './components/Socials';
import Footer from './components/Footer';
import NewsletterBanner from './components/NewsletterBanner';
import Preloader from './components/Preloader';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import EvidenceLocker from './components/EvidenceLocker';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const musicRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const merchRef = useRef<HTMLDivElement>(null);

  const scrollToMusic = () => {
    musicRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToSocials = () => {
    socialsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToMerch = () => {
    merchRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-brand-black font-sans transition-opacity duration-700 ${isLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <Header 
          onMusicClick={scrollToMusic} 
          onAboutClick={scrollToAbout} 
          onSocialsClick={scrollToSocials}
          onMerchClick={scrollToMerch}
        />
        <NewsletterBanner />
        <main>
          <Hero onListenNowClick={scrollToMusic} onBookUsClick={scrollToContact} />
          
          <div id="music" ref={musicRef} className="py-20 sm:py-32 scroll-mt-16">
            <Music />
          </div>

          <div className="w-full h-px bg-dark-red/50"></div>
          
          <div id="about" ref={aboutRef} className="py-20 sm:py-32 scroll-mt-16">
            <About />
          </div>

          <div className="w-full h-px bg-dark-red/50"></div>

          <div id="merch" ref={merchRef} className="py-20 sm:py-32 scroll-mt-16">
            <EvidenceLocker />
          </div>

          <div className="w-full h-px bg-dark-red/50"></div>
          
          <div id="socials" ref={socialsRef} className="py-20 sm:py-32 scroll-mt-16">
            <Socials />
          </div>

          <div className="w-full h-px bg-dark-red/50"></div>

          {/* Contact Form Section */}
          <div id="contact" ref={contactRef} className="py-20 sm:py-32 scroll-mt-16 bg-brand-black">
             <Contact />
          </div>
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default App;
