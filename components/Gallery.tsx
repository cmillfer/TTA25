
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
    alt: 'Crowd going wild at a rave',
    rotation: 'rotate-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=2070&auto=format&fit=crop',
    alt: 'DJ hands on mixer',
    rotation: '-rotate-2'
  },
  {
    src: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=2076&auto=format&fit=crop',
    alt: 'Stage lights and smoke',
    rotation: 'rotate-2'
  },
  {
    src: 'https://images.unsplash.com/photo-1558505832-0356a2356133?q=80&w=2070&auto=format&fit=crop',
    alt: 'Gritty warehouse party',
    rotation: '-rotate-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1514525253440-b39345208608?q=80&w=1974&auto=format&fit=crop',
    alt: 'Silhouette of DJ',
    rotation: 'rotate-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop',
    alt: 'Concert confetti',
    rotation: '-rotate-2'
  }
];

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase font-mono">
            The Vault
          </h2>
          <p className="mt-4 text-lg text-paper-light">
            Evidence from the scene of the crime.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {galleryImages.map((img, index) => (
          <AnimateOnScroll key={index} delay={index * 100} className="break-inside-avoid">
            <div 
              className={`relative bg-white p-2 shadow-lg transform transition-all duration-300 hover:scale-105 hover:z-10 hover:rotate-0 ${img.rotation}`}
            >
                {/* Tape Effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/20 backdrop-blur-sm border-l border-r border-white/40 rotate-1 z-20" style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0% 100%)' }}></div>

                <div className="relative overflow-hidden group">
                    <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-auto filter sepia-[0.2] contrast-125 brightness-90 group-hover:invert group-hover:hue-rotate-180 transition-all duration-100 ease-linear"
                    />
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]"></div>
                </div>
                
                <div className="pt-2 pb-1 px-2">
                    <p className="font-typewriter text-xs text-black opacity-70 uppercase tracking-widest">
                        EVIDENCE #{1000 + index}
                    </p>
                </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
