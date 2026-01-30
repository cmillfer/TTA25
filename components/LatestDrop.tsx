import React, { useState, useEffect } from 'react';
import { MusicNoteIcon } from './icons/MusicNoteIcon';
import { YouTubeIcon } from './icons/YouTubeIcon';

const LatestDrop: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API Fetch latency and handshake
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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
                            <div className="animate-pulse text-lg font-bold">ESTABLISHING UPLINK...</div>
                            <div className="text-xs opacity-70 mt-2">HANDSHAKE: [////////////////////] 99%</div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                        {/* Cover Art */}
                        <div className="relative w-full max-w-xs shrink-0 group/art">
                            <img 
                                src="/images/Fallen.png" 
                                alt="Fallen From Grace Cover Art" 
                                className="w-full rounded border border-primary-red/20 shadow-[0_0_15px_rgba(210,43,43,0.2)] group-hover/art:contrast-125 transition-all duration-500"
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
                                    <span className="bg-primary-red/20 text-primary-red text-[10px] px-2 py-1 rounded border border-primary-red/20 font-mono">SINGLE</span>
                                    <span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-1 rounded border border-slate-700 font-mono">2024</span>
                                </div>
                                <h3 className="text-3xl sm:text-5xl font-bold uppercase font-typewriter text-white glitch" data-text="FALLEN FROM GRACE">FALLEN FROM GRACE</h3>
                                <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 text-xs font-mono text-primary-green/80">
                                    <span className="bg-brand-black border border-primary-green/30 px-2 py-1">BPM: 130</span>
                                    <span className="bg-brand-black border border-primary-green/30 px-2 py-1">KEY: C MIN</span>
                                    <span className="bg-brand-black border border-primary-green/30 px-2 py-1">GENRE: ETHEREAL BASS</span>
                                </div>
                            </div>

                            <p className="text-paper-light/80 font-mono text-sm border-l-2 border-primary-red pl-4 italic">
                                "A haunting journey through sound, blending ethereal melodies with a heavy, grounding bassline. This track explores themes of descent and redemption."
                            </p>

                            <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                                <a 
                                  href="https://www.youtube.com/@ToeTagAwards" 
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