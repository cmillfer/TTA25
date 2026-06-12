import React, { createContext, useContext, useState, useCallback } from 'react';

interface MusicPlayerContextValue {
  activeVideoId: string | null;
  setActiveVideoId: (videoId: string | null) => void;
  toggleVideo: (videoId: string) => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextValue | null>(null);

export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const toggleVideo = useCallback((videoId: string) => {
    setActiveVideoId((current) => (current === videoId ? null : videoId));
  }, []);

  return (
    <MusicPlayerContext.Provider
      value={{ activeVideoId, setActiveVideoId, toggleVideo }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

export function useMusicPlayer(): MusicPlayerContextValue {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within MusicPlayerProvider');
  }
  return context;
}