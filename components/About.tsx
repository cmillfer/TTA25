import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const About: React.FC = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase font-mono">About The Duo</h2>
          <p className="mt-4 text-lg text-paper-light">
            Bringing the underground to the forefront.
          </p>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll delay={150}>
        <div className="bg-dark-green/20 rounded-lg shadow-xl ring-1 ring-primary-green/20 overflow-hidden">
          <div className="lg:flex lg:items-start lg:gap-8 p-8">
            <div className="flex-none lg:w-1/3 mb-8 lg:mb-0">
              <img 
                src="https://i.imgur.com/JI5RWoq.jpeg" 
                alt="Toe Tag Awards duo C Milfer and Yung Saltine in a gritty, high-contrast photo." 
                className="w-full rounded-lg shadow-lg aspect-square object-cover ring-1 ring-primary-green/30"
              />
            </div>
            <div className="flex-grow text-paper-light/90 leading-relaxed space-y-4">
              <p>
                Toe Tag Awards is the explosive DJ and producer duo shaking the 757 and the 321 and refusing to slow down. Built by C Milfer and Yung Saltine, the pair mixes raw talent, wild creativity, and twisted humor into a sound that hits like a back alley fight and a festival anthem at the same time.
              </p>
              <p>
                <span className="block text-center sm:text-right sm:float-right text-lg font-bold font-mono uppercase text-primary-green/80 sm:w-1/3 sm:ml-4 mb-4 sm:mb-2 sm:clear-right">Cool head. Cold beats. Loud energy.</span>
                C Milfer is the backbone and the brain. Raised on a mix of metal riffs, country grit, and bass that shakes your ribs, he brings the precision and technical skill that make every drop land exactly where it should. Offstage he is Corey Miller, a producer with focus, discipline, and ears sharp enough to slice through chaos. Onstage he becomes the calm eye of the storm. He anchors the madness.
              </p>
              <p>
                 <span className="block text-center sm:text-left sm:float-left text-lg font-bold font-mono uppercase text-primary-green/80 sm:w-1/3 sm:mr-4 mb-4 sm:mb-2 sm:clear-left">The spark that lights the fuse.</span>
                Yung Saltine began in the Virginia Beach punk scene. He cut his teeth in sweaty garages, tiny clubs, and chaotic mosh pits before his drumming talent got too big to ignore. That skill carried him straight onto bigger stages, opening for heavyweights including Slipknot and Slayer. Off the decks he is Ted Brown, a creative wildfire with no pause button. Onstage he is unpredictable energy. The playful menace. The one who can flip a whole crowd with a grin and a sound no one saw coming.
              </p>
              <p>
                Together they built Toe Tag Awards into more than a duo. It is a brand. A sound. A universe of gritty storytelling, humor, rebellion, and high voltage energy. From warehouse shows to festival stages, from cowboy inspired country tracks to aggressive EDM drops, from outlaw themes to gospel fused club bangers, Toe Tag Awards keeps pushing the line and daring everyone else to keep up.
              </p>
              <div className="mt-6 leading-relaxed space-y-4 pt-4">
                <p className="text-center">Their motto is simple:</p>
                <blockquote className="text-center text-xl font-bold font-mono uppercase tracking-widest text-primary-red py-4 neon-text">
                  Drop the beat. Tag the toe.
                </blockquote>
                <p className="text-center">The rest is history waiting to happen.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default About;