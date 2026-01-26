import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const About: React.FC = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase font-mono glitch" data-text="The Duo">
            The Duo
          </h2>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimateOnScroll delay={200}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-red to-dark-red rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="https://i.imgur.com/JI5RWoq.jpeg" 
              alt="Toe Tag Awards performing live" 
              className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-paper-light/90 font-mono">
              Born in the underground circuits of the East Coast, <span className="text-primary-red font-bold uppercase">Toe Tag Awards</span> is the collaborative force of <span className="font-bold text-white">C Milfer AKA Corey Miller</span> and <span className="font-bold text-white">Yung Saltine AKA Ted Brown</span>.
            </p>
            <p className="text-lg leading-relaxed text-paper-light/90 font-mono">
              Combining elements of industrial bass, outlaw country motifs, and raw punk energy, they have carved out a unique space in the electronic scene. Their sets are high-octane transmissions designed for the gritty, the bold, and the midnight wanderers.
            </p>
            <div className="pt-4">
               <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-primary-red"></div>
                  <p className="italic text-paper-light/70 font-mono">
                    "We don't just play tracks. We leave a mark. Every set is a statement."
                  </p>
               </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default About;