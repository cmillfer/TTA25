import React, { useState } from 'react';
import { getYouTubeEmbedUrl } from '../utils/youtube';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  autoplay?: boolean;
  className?: string;
  clickToLoad?: boolean;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title,
  autoplay = false,
  className = '',
  clickToLoad = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(!clickToLoad || autoplay);

  const embedUrl = getYouTubeEmbedUrl(videoId, autoplay && isLoaded);

  return (
    <div className={`relative w-full aspect-video overflow-hidden rounded-md bg-black ${className}`}>
      {isLoaded ? (
        <iframe
          src={embedUrl}
          title={`YouTube player: ${title}`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsLoaded(true)}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-brand-black/90 text-white transition-colors hover:bg-brand-black focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-red"
          aria-label={`Load and play ${title}`}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-red text-brand-black shadow-[0_0_20px_rgba(210,43,43,0.5)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7 translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-primary-red">
            Tap to load player
          </span>
        </button>
      )}
    </div>
  );
};

export default YouTubeEmbed;