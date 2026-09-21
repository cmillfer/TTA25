import { useState, useEffect } from 'react';
import { discography, featuredFallback } from '../data/music';
import type { CoverArtItem } from '../types';
import { YOUTUBE_HANDLE } from '../constants/youtube';
import { fetchChannelVideos, parseFeedCache, FEED_CACHE_KEY, FEED_TTL } from '../utils/youtubeFeed';

export const useYouTubeLatestDrop = () => {
  const [videos, setVideos] = useState<CoverArtItem[]>(discography.filter(v => v.videoId));
  const [latestDrop, setLatestDrop] = useState<CoverArtItem | null>(featuredFallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingFallback, setUsingFallback] = useState(true);

  useEffect(() => {
    let stopped = false;
    let inFlight = false;
    let controller: AbortController | undefined;
    let lastFetched = 0;
    let hasSyncedVideos = false;
    try {
      const saved = parseFeedCache(localStorage.getItem(FEED_CACHE_KEY));
      if (saved) {
        setVideos(saved.videos); setLatestDrop(saved.videos[0]); setLoading(false);
        hasSyncedVideos = true;
        setUsingFallback(!saved.fresh);
        // A fresh cache avoids repeated API requests on page reloads.
        const record = JSON.parse(localStorage.getItem(FEED_CACHE_KEY)!);
        lastFetched = saved.fresh ? record.cachedAt : 0;
      }
    } catch { /* Storage is optional, including in private browsing. */ }

    const refresh = async () => {
      if (stopped || inFlight || (lastFetched && Date.now() - lastFetched < FEED_TTL)) return;
      const key = import.meta.env.VITE_YOUTUBE_API_KEY;
      if (!key) {
        setUsingFallback(true); setLoading(false);
        setError('Showing saved picks. Visit our YouTube channel for the newest videos.');
        return;
      }
      inFlight = true;
      controller = new AbortController();
      const timeout = window.setTimeout(() => controller?.abort(), 12000);
      try {
        const next = await fetchChannelVideos(key, YOUTUBE_HANDLE, controller.signal);
        if (stopped) return;
        setVideos(next); setLatestDrop(next[0]); setUsingFallback(false); setError(null);
        hasSyncedVideos = true; lastFetched = Date.now();
        try { localStorage.setItem(FEED_CACHE_KEY, JSON.stringify({ videos: next, cachedAt: lastFetched })); } catch { /* Optional cache. */ }
      } catch {
        if (!stopped) {
          setUsingFallback(true);
          setError(hasSyncedVideos ? 'Showing saved videos while YouTube reconnects. Visit our channel for the newest uploads.' : 'Showing selected videos. Visit our YouTube channel for the newest uploads.');
        }
      } finally {
        window.clearTimeout(timeout); inFlight = false;
        if (!stopped) setLoading(false);
      }
    };
    void refresh();
    const interval = window.setInterval(() => { if (!document.hidden) void refresh(); }, FEED_TTL);
    const onVisible = () => { if (!document.hidden) void refresh(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => { stopped = true; controller?.abort(); window.clearInterval(interval); document.removeEventListener('visibilitychange', onVisible); };
  }, []);

  return { videos, latestDrop, loading, error, usingFallback };
};
