
import React, { useState, useRef, useEffect } from 'react';

const sounds = [
  { label: 'PANIC', url: 'https://www.soundjay.com/buttons/sounds/button-30.mp3', color: 'bg-primary-red' },
  { label: 'BREACH', url: 'https://www.soundjay.com/buttons/sounds/button-19.mp3', color: 'bg-primary-green' },
  { label: 'TAG', url: 'https://www.soundjay.com/buttons/sounds/button-37.mp3', color: 'bg-slate-700' },
];

const Soundboard: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const audioCache = useRef<Record<string, HTMLAudioElement>>({});

  useEffect(() => {
    // Pre-load audio objects
    sounds.forEach(sound => {
      if (!audioCache.current[sound.url]) {
        const audio = new Audio(sound.url);
        audio.volume = 0.4;
        audioCache.current[sound.url] = audio;
      }
    });
  }, []);

  const playSound = (url: string, index: number) => {
    let audio = audioCache.current[url];

    if (!audio) {
      audio = new Audio(url);
      audio.volume = 0.4;
      audioCache.current[url] = audio;
    }

    audio.currentTime = 0;
    audio.play().catch(err => console.error("Audio playback failed:", err));

    setActiveIdx(index);
    setTimeout(() => setActiveIdx(null), 300);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
      <div className="bg-brand-black border-2 border-dark-red/50 p-3 rounded shadow-[0_0_20px_rgba(0,0,0,0.8)] flex flex-col gap-2">
        <div className="text-[10px] font-tech text-primary-red/70 uppercase tracking-widest border-b border-dark-red/20 pb-1 mb-1 text-center">
          Tactical Console
        </div>
        <div className="flex gap-2">
          {sounds.map((sound, i) => (
            <button
              key={i}
              onClick={() => playSound(sound.url, i)}
              className={`w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center transition-all duration-75 active:scale-95 ${
                activeIdx === i ? 'brightness-150 scale-105 shadow-[0_0_15px_rgba(255,255,255,0.4)]' : ''
              } ${sound.color}`}
              title={sound.label}
            >
              <span className="text-[8px] font-bold text-white font-mono leading-none">{sound.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Soundboard;
