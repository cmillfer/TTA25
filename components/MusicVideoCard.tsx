import React, { useEffect, useState } from 'react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { CoverArtItem } from '../types';
import YouTubeEmbed from './YouTubeEmbed';
import { YouTubeIcon } from './icons/YouTubeIcon';

interface MusicVideoCardProps {
  track: CoverArtItem;
}

const MusicVideoCard: React.FC<MusicVideoCardProps> = ({ track }) => {
  const { activeVideoId, toggleVideo } = useMusicPlayer();
  const [imageLoading, setImageLoading] = useState(true);
  const isPlaying = Boolean(track.videoId && activeVideoId === track.videoId);
  const canEmbed = Boolean(track.videoId);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isPlaying) {
        toggleVideo(track.videoId!);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isPlaying, toggleVideo, track.videoId]);

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg bg-dark-red/10 shadow-lg ring-1 ring-dark-red/20">
      {isPlaying && track.videoId ? (
        <div className="relative">
          <YouTubeEmbed
            videoId={track.videoId}
            title={track.title}
            autoplay
            clickToLoad={false}
          />
          <div className="absolute left-2 top-2 rounded bg-primary-red px-2 py-1 font-mono text-[10px] font-bold uppercase text-brand-black">
            Now Playing
          </div>
        </div>
      ) : (
        <div className="relative aspect-square w-full overflow-hidden">
          {imageLoading && (
            <div className="absolute inset-0 animate-pulse bg-dark-red/20" />
          )}
          <img
            src={track.src}
            alt={track.alt}
            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setImageLoading(false)}
          />
          <div className="absolute inset-0 bg-brand-black/40 transition-colors group-hover:bg-brand-black/55" />
          {track.type && (
            <span className="absolute right-2 top-2 rounded border border-primary-red/30 bg-brand-black/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary-red">
              {track.type}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col gap-3 p-4">
        <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white line-clamp-2">
          {track.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {canEmbed ? (
            <button
              type="button"
              onClick={() => toggleVideo(track.videoId!)}
              aria-pressed={isPlaying}
              aria-label={isPlaying ? `Stop playing ${track.title}` : `Play ${track.title}`}
              className={`inline-flex flex-1 items-center justify-center gap-2 rounded px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-red ${
                isPlaying
                  ? 'bg-primary-red text-brand-black'
                  : 'bg-primary-red/20 text-primary-red hover:bg-primary-red hover:text-brand-black'
              }`}
            >
              {isPlaying ? 'Close Player' : 'Play Inline'}
            </button>
          ) : null}

          <a
            href={track.streamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded border border-slate-600 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-300 transition-colors hover:border-primary-red hover:text-primary-red focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-red"
          >
            <YouTubeIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {canEmbed ? 'YouTube' : 'View Channel'}
          </a>
        </div>
      </div>
    </article>
  );
};

export default MusicVideoCard;