import React from 'react';
import { MusicNoteIcon } from './icons/MusicNoteIcon';
import { YouTubeIcon } from './icons/YouTubeIcon';
import { CoverArtItem } from '../types';
import YouTubeEmbed from './YouTubeEmbed';

interface LatestDropProps {
  latestDrop: CoverArtItem | null;
  loading: boolean;
  error: string | null;
  usingFallback?: boolean;
}

const LatestDrop: React.FC<LatestDropProps> = ({
  latestDrop,
  loading,
  error,
  usingFallback = false,
}) => {
  return (
    <div className="w-full mb-16 relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-red to-dark-red opacity-50 blur group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

      <div className="relative bg-brand-black border border-primary-red/30 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between bg-black/50 border-b border-primary-red/30 p-2 px-4 font-mono text-[10px] sm:text-xs text-primary-red uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-red"></span>
            </span>
            INCOMING_TRANSMISSION // LIVE
          </div>
          <div className="hidden sm:block">
            {usingFallback ? 'API_STATUS: FALLBACK' : 'API_STATUS: CONNECTED'}
          </div>
        </div>

        <div className="p-4 sm:p-8 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
          {loading ? (
            <div className="h-64 flex flex-col items-center justify-center text-primary-red font-mono space-y-4">
              <MusicNoteIcon className="h-16 w-16 animate-bounce" />
              <div className="text-center">
                <div className="animate-pulse text-lg font-bold">ESTABLISHING UPLINK TO YOUTUBE...</div>
                <div className="text-xs opacity-70 mt-2">FETCHING LATEST DROP...</div>
              </div>
            </div>
          ) : error && !latestDrop ? (
            <div className="h-64 flex flex-col items-center justify-center text-red-500 font-mono space-y-4">
              <div className="text-center">
                <div className="text-lg font-bold">CONNECTION FAILED</div>
                <div className="text-xs mt-2">{error}</div>
              </div>
            </div>
          ) : latestDrop ? (
            <div className="flex flex-col gap-8">
              {latestDrop.videoId ? (
                <YouTubeEmbed
                  videoId={latestDrop.videoId}
                  title={latestDrop.title}
                  clickToLoad
                  className="shadow-[0_0_20px_rgba(210,43,43,0.15)]"
                />
              ) : (
                <img
                  src={latestDrop.src}
                  alt={latestDrop.alt}
                  className="w-full rounded border border-primary-red/20 shadow-[0_0_15px_rgba(210,43,43,0.2)] object-cover aspect-video"
                />
              )}

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="bg-primary-red/20 text-primary-red text-[10px] px-2 py-1 rounded border border-primary-red/20 font-mono">
                      VIDEO
                    </span>
                    <span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-1 rounded border border-slate-700 font-mono">
                      {latestDrop.publishedAt
                        ? new Date(latestDrop.publishedAt).getFullYear()
                        : 'NEW'}
                    </span>
                    {usingFallback && (
                      <span className="bg-amber-900/40 text-amber-300 text-[10px] px-2 py-1 rounded border border-amber-700/40 font-mono">
                        CURATED FALLBACK
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-2xl sm:text-4xl font-bold uppercase font-typewriter text-white glitch line-clamp-2"
                    data-text={latestDrop.title}
                  >
                    {latestDrop.title}
                  </h3>
                </div>

                {error && usingFallback && (
                  <p className="text-amber-400/90 font-mono text-xs border-l-2 border-amber-500 pl-4">
                    {error}
                  </p>
                )}

                <p className="text-paper-light/80 font-mono text-sm border-l-2 border-primary-red pl-4 italic line-clamp-3">
                  {latestDrop.description || 'No description available.'}
                </p>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href={latestDrop.streamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded border border-primary-red/40 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-primary-red transition-colors hover:bg-primary-red hover:text-brand-black focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-red"
                  >
                    <YouTubeIcon className="h-4 w-auto" aria-hidden="true" />
                    <span>Open on YouTube</span>
                  </a>
                  <a
                    href="https://music.youtube.com/search?q=Toe+Tag+Awards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded border border-slate-600 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-slate-300 transition-colors hover:border-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-red"
                  >
                    YouTube Music
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-red-500 font-mono space-y-4">
              <div className="text-center">
                <div className="text-lg font-bold">NO TRANSMISSION</div>
                <div className="text-xs mt-2">{error || 'No data found.'}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestDrop;