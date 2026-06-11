import React from 'react';
import { MusicNoteIcon } from './icons/MusicNoteIcon';
import { YouTubeIcon } from './icons/YouTubeIcon';
import { CoverArtItem } from '../types';

interface LatestDropProps {
    latestDrop: CoverArtItem | null;
    loading: boolean;
    error: string | null;
}

const LatestDrop: React.FC<LatestDropProps> = ({ latestDrop, loading, error }) => {
  return (
    <div className="w-full mb-16 relative group">
        {/* Glitch Border Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-red to-dark-red opacity-50 blur group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative bg-brand-black border border-primary-red/30 rounded-lg overflow-hidden">
            {/* Header / Terminal Bar */}
            <div className="flex items-center justify-between bg-black/50 border-b border-primary-red/30 p-2 px-4 font-mono text-[10px] sm:text-xs text-primary-red uppercase tracking-widest">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-red"></span>
                    </span>
                    INCOMING_TRANSMISSION // LIVE
                </div>
                <div className="hidden sm:block">API_STATUS: CONNECTED</div>
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
                ) : error || !latestDrop ? (
                    <div className="h-64 flex flex-col items-center justify-center text-red-500 font-mono space-y-4">
                         <div className="text-center">
                            <div className="text-lg font-bold">CONNECTION FAILED</div>
                            <div className="text-xs mt-2">{error || "No data found."}</div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                        {/* Cover Art */}
                        <div className="relative w-full max-w-xs shrink-0 group/art">
                            <img 
                                src={latestDrop.src}
                                alt={latestDrop.alt}
                                className="w-full rounded border border-primary-red/20 shadow-[0_0_15px_rgba(210,43,43,0.2)] group-hover/art:contrast-125 transition-all duration-500 object-cover aspect-video sm:aspect-square"
                            />
                            <div className="absolute top-0 right-0 p-2">
                                <div className="bg-primary-red text-brand-black text-xs font-bold px-2 py-1 uppercase font-mono transform rotate-3 shadow-lg">
                                    Latest Drop
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -left-2 bg-brand-black border border-primary-green p-1 px-2 text-[10px] font-mono text-primary-green">
                                STATUS: RELEASED
                            </div>
                        </div>

                        {/* Track Info & Player */}
                        <div className="flex-grow w-full space-y-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-primary-red/20 text-primary-red text-[10px] px-2 py-1 rounded border border-primary-red/20 font-mono">VIDEO</span>
                                    <span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-1 rounded border border-slate-700 font-mono">
                                        {latestDrop.publishedAt ? new Date(latestDrop.publishedAt).getFullYear() : 'NEW'}
                                    </span>
                                </div>
                                <h3 className="text-2xl sm:text-4xl font-bold uppercase font-typewriter text-white glitch line-clamp-2" data-text={latestDrop.title}>{latestDrop.title}</h3>
                            </div>

                            <p className="text-paper-light/80 font-mono text-sm border-l-2 border-primary-red pl-4 italic line-clamp-3">
                                {latestDrop.description || "No description available."}
                            </p>

                            <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                                <a 
                                  href={latestDrop.streamUrl}
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex-1 bg-red-600 text-white font-bold uppercase text-xs py-3 px-4 rounded hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-[0_4px_0_rgb(150,0,0)] active:shadow-none active:translate-y-[4px]"
                                >
                                    <YouTubeIcon className="h-4 w-auto" />
                                    <span>Watch on YouTube</span>
                                </a>
                                <a href="#" className="flex-1 bg-white text-black font-bold uppercase text-xs py-3 px-4 rounded hover:bg-paper-light transition-colors flex items-center justify-center gap-2 shadow-[0_4px_0_rgb(150,150,150)] active:shadow-none active:translate-y-[4px]">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png" alt="Apple Music" className="h-4 w-auto" />
                                    <span>Apple Music</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default LatestDrop;