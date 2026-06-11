
import React, { useState, useEffect } from 'react';
import Lightbox from './Lightbox';
import AnimateOnScroll from './AnimateOnScroll';
import LatestDrop from './LatestDrop';
import { CoverArtItem } from '../types';
import { useYouTubeMusic } from '../hooks/useYouTubeMusic';

const Music: React.FC = () => {
  const { latestDrop, discography, loading, error } = useYouTubeMusic();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<CoverArtItem | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean[]>([]);

  useEffect(() => {
    if (discography.length > 0) {
      setImageLoading(new Array(discography.length).fill(true));
    }
  }, [discography]);

  const handleImageLoad = (index: number) => {
    setImageLoading(prev => {
      const next = [...prev];
      next[index] = false;
      return next;
    });
  };

  const openLightbox = (art: CoverArtItem) => {
    setSelectedImage(art);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="container mx-auto max-w-5xl px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase font-mono">
              Music
            </h2>
            <p className="mt-4 text-lg text-paper-light">
              Visuals from the underground. Click to explore.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Featured Latest Release */}
        <AnimateOnScroll delay={150}>
            <LatestDrop latestDrop={latestDrop} loading={loading} error={error} />
        </AnimateOnScroll>

        <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-dark-red flex-grow opacity-50"></div>
                <h3 className="text-xl font-mono uppercase text-white tracking-widest">The Discography</h3>
                <div className="h-px bg-dark-red flex-grow opacity-50"></div>
            </div>

            {loading ? (
                <div className="flex justify-center my-12">
                   <div className="animate-pulse text-primary-red font-mono">LOADING DISCOGRAPHY...</div>
                </div>
            ) : error ? (
                <div className="text-center text-red-500 font-mono my-12">
                    ERROR: {error}
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {discography.map((art, index) => (
                    <AnimateOnScroll key={art.streamUrl} delay={index * 150}>
                <button
                  type="button"
                  className="group relative block w-full cursor-pointer overflow-hidden rounded-lg bg-dark-red/10 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-red/80 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                  onClick={() => openLightbox(art)}
                  aria-label={`View details for ${art.title}`}
                >
                  {imageLoading[index] && (
                    <div className="aspect-square w-full animate-pulse bg-dark-red/20" />
                  )}
                  <img
                    src={art.src}
                    alt={art.alt}
                    className={`aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      imageLoading[index] ? 'hidden' : 'block'
                    }`}
                    onLoad={() => handleImageLoad(index)}
                  />
                  <div className="absolute inset-0 bg-brand-black/40 transition-all duration-300 group-hover:bg-brand-black/60" />
                  <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-center text-xl font-bold uppercase tracking-wider text-white font-mono">
                      {art.title}
                    </h3>
                  </div>
                </button>
                    </AnimateOnScroll>
                  ))}
                </div>
            )}
        </div>
      </div>

      {selectedImage && (
        <Lightbox
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          title={selectedImage.title}
          streamUrl={selectedImage.streamUrl}
        />
      )}
    </>
  );
};

export default Music;
