
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface Show {
  date: string;
  venue: string;
  location: string;
  status: 'CONFIRMED' | 'WANTED';
  intelUrl: string;
}

const shows: Show[] = [
  {
    date: 'OCT 24, 2025',
    venue: 'The Bunker',
    location: 'Norfolk, VA',
    status: 'CONFIRMED',
    intelUrl: '#'
  },
  {
    date: 'NOV 02, 2025',
    venue: 'Neon Wasteland',
    location: 'Virginia Beach, VA',
    status: 'WANTED',
    intelUrl: '#'
  },
  {
    date: 'NOV 15, 2025',
    venue: 'Warehouse 42',
    location: 'Richmond, VA',
    status: 'CONFIRMED',
    intelUrl: '#'
  },
  {
    date: 'DEC 05, 2025',
    venue: 'The Fallout Shelter',
    location: 'Orlando, FL',
    status: 'CONFIRMED',
    intelUrl: '#'
  }
];

const LiveShows: React.FC = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase font-mono glitch" data-text="The Hit List">
            The Hit List
          </h2>
          <p className="mt-4 text-lg text-paper-light font-mono italic">
            Target locations acquired. Deployment imminent.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="space-y-4">
        {shows.map((show, index) => (
          <AnimateOnScroll key={index} delay={index * 100}>
            <div className="group relative flex flex-col md:flex-row items-center justify-between p-6 bg-brand-black border border-dark-red/30 rounded-lg hover:border-primary-red transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="font-tech text-2xl text-primary-red font-bold tracking-tighter">
                  {show.date}
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase text-white font-mono">{show.venue}</h3>
                  <p className="text-sm text-paper-light/60 font-mono uppercase">{show.location}</p>
                </div>
              </div>

              <div className="mt-4 md:mt-0 flex items-center gap-6">
                <span className={`px-3 py-1 text-[10px] font-bold font-mono rounded border ${
                  show.status === 'CONFIRMED' 
                    ? 'bg-primary-green/20 text-primary-green border-primary-green/40' 
                    : 'bg-primary-red/20 text-primary-red border-primary-red/40 animate-pulse'
                }`}>
                  {show.status}
                </span>
                <a 
                  href={show.intelUrl}
                  className="bg-white text-black px-4 py-2 text-xs font-bold uppercase font-mono hover:bg-primary-red hover:text-white transition-colors"
                >
                  Get Intel
                </a>
              </div>
              
              {/* Background scanline effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
};

export default LiveShows;
