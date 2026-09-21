import type { CoverArtItem } from '../types';

const VIDEO_ID = /^[a-zA-Z0-9_-]{11}$/;

export function formatChannelVideos(items: unknown): CoverArtItem[] {
  if (!Array.isArray(items)) return [];
  const seen = new Set<string>();
  return items.flatMap(item => {
    const id = item?.contentDetails?.videoId;
    const snippet = item?.snippet;
    if (typeof id !== 'string' || !VIDEO_ID.test(id) || seen.has(id) ||
        typeof snippet?.title !== 'string' || !snippet.title.trim() ||
        ['Private video', 'Deleted video'].includes(snippet.title)) return [];
    seen.add(id);
    const date = item.contentDetails.videoPublishedAt || snippet.publishedAt;
    return [{
      videoId: id, title: snippet.title, alt: `Video thumbnail for ${snippet.title}`,
      src: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      streamUrl: `https://www.youtube.com/watch?v=${id}`,
      description: typeof snippet.description === 'string' ? snippet.description : '',
      publishedAt: typeof date === 'string' && Number.isFinite(Date.parse(date)) ? date : undefined,
      type: 'video' as const,
    }];
  }).slice(0, 12);
}

export async function fetchChannelVideos(apiKey: string, handle: string, signal?: AbortSignal, fetcher: typeof fetch = fetch): Promise<CoverArtItem[]> {
  const get = async (endpoint: string, params: Record<string, string>) => {
    const response = await fetcher(`https://www.googleapis.com/youtube/v3/${endpoint}?${new URLSearchParams({ ...params, key: apiKey })}`, { signal });
    if (!response.ok) throw new Error('YouTube is temporarily unavailable.');
    return response.json();
  };
  const channel = await get('channels', { part: 'contentDetails', forHandle: handle });
  const playlist = channel.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (typeof playlist !== 'string' || !playlist) throw new Error('Channel uploads are unavailable.');
  const result = await get('playlistItems', { part: 'snippet,contentDetails', playlistId: playlist, maxResults: '12' });
  const videos = formatChannelVideos(result.items);
  if (!videos.length) throw new Error('No public channel videos are available.');
  return videos;
}

export const FEED_TTL = 15 * 60 * 1000;
export const FEED_CACHE_KEY = 'tta25_youtube_toetagawards_v2';

export function parseFeedCache(raw: string | null, now = Date.now()): { videos: CoverArtItem[]; fresh: boolean } | null {
  try {
    const value = JSON.parse(raw || 'null');
    if (!value || typeof value.cachedAt !== 'number' || !Number.isFinite(value.cachedAt) || value.cachedAt > now || now - value.cachedAt > 86400000 || !Array.isArray(value.videos)) return null;
    // Rebuild URLs from IDs rather than trusting cached external URLs.
    const videos = formatChannelVideos(value.videos.map((v: CoverArtItem) => ({ contentDetails: { videoId: v.videoId, videoPublishedAt: v.publishedAt }, snippet: { title: v.title, description: v.description } })));
    return videos.length ? { videos, fresh: now - value.cachedAt < FEED_TTL } : null;
  } catch { return null; }
}
