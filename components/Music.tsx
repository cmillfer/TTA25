import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import LatestDrop from './LatestDrop';
import MusicVideoCard from './MusicVideoCard';
import { MusicPlayerProvider } from '../contexts/MusicPlayerContext';
import { YOUTUBE_VIDEOS_URL } from '../constants/youtube';
import { useYouTubeLatestDrop } from '../hooks/useYouTubeLatestDrop';

const Music: React.FC = () => {
  const { videos, latestDrop, loading, error, usingFallback } = useYouTubeLatestDrop();

  return (
    <MusicPlayerProvider>
      <div className="container mx-auto max-w-5xl px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase font-mono">
              Music
            </h2>
            <p className="mt-4 text-lg text-paper-light">
              Visuals from the underground. Play inline or open on YouTube.
            </p>
            <a href={YOUTUBE_VIDEOS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 px-6 py-3 rounded border border-primary-red text-white font-mono hover:bg-primary-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
              View all videos on YouTube
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <LatestDrop
            latestDrop={latestDrop}
            loading={loading}
            error={error}
            usingFallback={usingFallback}
          />
        </AnimateOnScroll>

        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-dark-red flex-grow opacity-50"></div>
            <h3 className="text-xl font-mono uppercase text-white tracking-widest">
              {usingFallback ? 'Selected Videos' : 'Recent Channel Uploads'}
            </h3>
            <div className="h-px bg-dark-red flex-grow opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {videos.filter(track => track.videoId !== latestDrop?.videoId).map((track, index) => (
              <AnimateOnScroll key={`${track.title}-${index}`} delay={index * 100}>
                <MusicVideoCard track={track} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </MusicPlayerProvider>
  );
};

export default Music;
