import { useState, useEffect } from 'react';
import { CoverArtItem } from '../types';

const CHANNEL_ID = 'UC_Wbg71fBKH1ND-3F3l_qTg';

export const useYouTubeMusic = () => {
  const [latestDrop, setLatestDrop] = useState<CoverArtItem | null>(null);
  const [discography, setDiscography] = useState<CoverArtItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      setLoading(true);
      setError(null);

      const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

      if (!apiKey) {
        setError("YouTube API key is missing. Please set VITE_YOUTUBE_API_KEY in your environment variables.");
        setLoading(false);
        return;
      }

      try {
        // First get the channel info to find the "Uploads" playlist ID (costs 1 quota)
        const channelResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${apiKey}`
        );

        if (!channelResponse.ok) {
            throw new Error(`YouTube API returned ${channelResponse.status}: ${channelResponse.statusText}`);
        }

        const channelData = await channelResponse.json();

        if (!channelData.items || channelData.items.length === 0) {
            setError("YouTube channel not found.");
            setLoading(false);
            return;
        }

        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // Now fetch items from that playlist (costs 1 quota) instead of searching
        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${uploadsPlaylistId}&maxResults=50&key=${apiKey}`
        );

        if (!playlistResponse.ok) {
          throw new Error(`YouTube API returned ${playlistResponse.status}: ${playlistResponse.statusText}`);
        }

        const data = await playlistResponse.json();

        if (!data.items || data.items.length === 0) {
          setError("No videos found for this channel.");
          setLoading(false);
          return;
        }

        const formattedVideos: CoverArtItem[] = data.items.map((item: any) => ({
          src: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
          alt: `Cover art for ${item.snippet.title}`,
          title: item.snippet.title,
          streamUrl: `https://www.youtube.com/watch?v=${item.contentDetails.videoId}`,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt
        }));

        setLatestDrop(formattedVideos[0]);
        setDiscography(formattedVideos.slice(1));

      } catch (err: any) {
        console.error("Error fetching YouTube videos:", err);
        setError(err.message || "Failed to fetch YouTube videos");
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeVideos();
  }, []);

  return { latestDrop, discography, loading, error };
};
