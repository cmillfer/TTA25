import { useState, useEffect } from 'react';
import { featuredFallback } from '../data/music';
import { CoverArtItem } from '../types';
import {
  getYouTubeWatchUrl,
  readLatestDropCache,
  writeLatestDropCache,
} from '../utils/youtube';

const CHANNEL_ID = 'UC_Wbg71fBKH1ND-3F3l_qTg';

export const useYouTubeLatestDrop = () => {
  const [latestDrop, setLatestDrop] = useState<CoverArtItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchLatestDrop = async () => {
      const cached = readLatestDropCache<CoverArtItem>();
      const hasCache = Boolean(cached?.videoId);

      setError(null);
      setUsingFallback(false);

      if (hasCache && cached) {
        setLatestDrop(cached);
        setLoading(false);
      } else {
        setLoading(true);
      }

      const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

      if (!apiKey) {
        if (!cached && featuredFallback) {
          setLatestDrop(featuredFallback);
          setUsingFallback(true);
          setError('YouTube API key is missing. Showing curated latest drop.');
        } else if (!cached) {
          setError('YouTube API key is missing. Please set VITE_YOUTUBE_API_KEY.');
        }
        setLoading(false);
        return;
      }

      try {
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${apiKey}`
        );

        if (!channelResponse.ok) {
          throw new Error(
            `YouTube API returned ${channelResponse.status}: ${channelResponse.statusText}`
          );
        }

        const channelData = await channelResponse.json();

        if (!channelData.items?.length) {
          throw new Error('YouTube channel not found.');
        }

        const uploadsPlaylistId =
          channelData.items[0].contentDetails.relatedPlaylists.uploads;

        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${uploadsPlaylistId}&maxResults=1&key=${apiKey}`
        );

        if (!playlistResponse.ok) {
          throw new Error(
            `YouTube API returned ${playlistResponse.status}: ${playlistResponse.statusText}`
          );
        }

        const data = await playlistResponse.json();

        if (!data.items?.length) {
          throw new Error('No videos found for this channel.');
        }

        const item = data.items[0];
        const videoId = item.contentDetails.videoId as string;
        const formatted: CoverArtItem = {
          src:
            item.snippet.thumbnails.high?.url ||
            item.snippet.thumbnails.medium?.url ||
            item.snippet.thumbnails.default?.url,
          alt: `Cover art for ${item.snippet.title}`,
          title: item.snippet.title,
          streamUrl: getYouTubeWatchUrl(videoId),
          videoId,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt,
          type: 'mix',
        };

        setLatestDrop(formatted);
        writeLatestDropCache(formatted);
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : 'Failed to fetch latest drop';

        if (!cached && featuredFallback) {
          setLatestDrop(featuredFallback);
          setUsingFallback(true);
          setError(`Using curated latest drop. (${message})`);
        } else if (!cached) {
          setError(message);
        } else {
          setError(message);
        }
        console.error('Error fetching YouTube latest drop:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestDrop();
  }, []);

  return { latestDrop, loading, error, usingFallback };
};