import test from 'node:test';
import assert from 'node:assert/strict';
import { fetchChannelVideos, formatChannelVideos, parseFeedCache, FEED_TTL } from '../utils/youtubeFeed.ts';

const item = (id = 'abcdefghijk', title = 'New music video') => ({ contentDetails: { videoId: id, videoPublishedAt: '2026-09-21T12:00:00Z' }, snippet: { title, description: 'Our new release', publishedAt: '2026-09-20T12:00:00Z' } });

test('resolves the chosen handle and loads 12 uploads without search API calls', async () => {
  const urls = [];
  const fetcher = async (url) => {
    urls.push(new URL(url));
    return new Response(JSON.stringify(urls.length === 1 ? { items: [{ contentDetails: { relatedPlaylists: { uploads: 'UUtest' } } }] } : { items: [item()] }));
  };
  const videos = await fetchChannelVideos('test-key', '@toetagawards', undefined, fetcher);
  assert.equal(urls[0].searchParams.get('forHandle'), '@toetagawards');
  assert.equal(urls[0].searchParams.has('id'), false);
  assert.equal(urls[1].searchParams.get('playlistId'), 'UUtest');
  assert.equal(urls[1].searchParams.get('maxResults'), '12');
  assert.equal(videos[0].streamUrl, 'https://www.youtube.com/watch?v=abcdefghijk');
  assert.equal(videos[0].publishedAt, '2026-09-21T12:00:00Z');
});

test('ignores private/deleted/invalid videos and duplicates', () => {
  assert.equal(formatChannelVideos([item(), item(), item('12345678901', 'Private video'), item('12345678902', 'Deleted video'), item('bad'), null]).length, 1);
  assert.deepEqual(formatChannelVideos(null), []);
});

test('limits gallery to 12 items and safely constructs URLs', () => {
  const result = formatChannelVideos(Array.from({ length: 20 }, (_, i) => item(String(i).padStart(11, '0'))));
  assert.equal(result.length, 12);
  assert.equal(result[0].src, 'https://i.ytimg.com/vi/00000000000/hqdefault.jpg');
});

test('cache reports fresh/stale and expires after 24 hours', () => {
  const raw = JSON.stringify({ videos: formatChannelVideos([item()]), cachedAt: 1000 });
  assert.equal(parseFeedCache(raw, 1001).fresh, true);
  assert.equal(parseFeedCache(raw, 1000 + FEED_TTL).fresh, false);
  assert.equal(parseFeedCache(raw, 86401001), null);
  assert.equal(parseFeedCache(raw, 0), null);
  assert.equal(parseFeedCache('{', 1001), null);
});

test('cache rejects malformed values and rebuilds URL destinations', () => {
  const videos = formatChannelVideos([item()]);
  videos[0].streamUrl = 'https://evil.example';
  assert.equal(parseFeedCache(JSON.stringify({ videos, cachedAt: 1 }), 2).videos[0].streamUrl, 'https://www.youtube.com/watch?v=abcdefghijk');
  assert.equal(parseFeedCache(JSON.stringify({ videos: [null], cachedAt: 1 }), 2), null);
});

test('quota failure does not expose API credentials', async () => {
  await assert.rejects(fetchChannelVideos('secret-key', '@toetagawards', undefined, async () => new Response('{}', { status: 403 })), /temporarily unavailable/);
});

test('missing channel or empty playlist fails instead of claiming sync', async () => {
  await assert.rejects(fetchChannelVideos('key', '@toetagawards', undefined, async () => new Response('{"items":[]}')), /unavailable/);
  let count = 0;
  await assert.rejects(fetchChannelVideos('key', '@toetagawards', undefined, async () => new Response(JSON.stringify(++count === 1 ? { items: [{ contentDetails: { relatedPlaylists: { uploads: 'UUtest' } } }] } : { items: [] }))), /No public/);
});
