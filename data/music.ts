import { CoverArtItem } from '../types';
import { getYouTubeWatchUrl, parseYouTubeVideoId } from '../utils/youtube';

function withVideoId(
  item: Omit<CoverArtItem, 'videoId'> & { streamUrl: string }
): CoverArtItem {
  const videoId = parseYouTubeVideoId(item.streamUrl) ?? undefined;
  return {
    ...item,
    videoId,
    streamUrl: videoId ? getYouTubeWatchUrl(videoId) : item.streamUrl,
  };
}

const curatedTracks: CoverArtItem[] = [
  withVideoId({
    src: '/images/Fallen.png',
    alt: "Cover art for Fallen From Grace, depicting a dramatic, ethereal scene that matches the song's title.",
    title: 'Fallen From Grace',
    streamUrl: 'https://www.youtube.com/@ToeTagAwards',
    type: 'video',
  }),
  withVideoId({
    src: '/images/Flicker.png',
    alt: 'Cover art for Flicker in the Ashes, a song by Toe Tag Awards.',
    title: 'Flicker in the Ashes',
    streamUrl: 'https://www.youtube.com/@ToeTagAwards',
    type: 'video',
  }),
  withVideoId({
    src: '/images/b0QOstD.jpeg',
    alt: 'Cover art for Vigilante, featuring a gritty illustration of a skull in a cowboy hat with crossed revolvers, embodying an outlaw theme.',
    title: 'Vigilante',
    streamUrl: 'https://www.youtube.com/@ToeTagAwards',
    type: 'video',
  }),
  withVideoId({
    src: '/images/UvoTMoA.jpeg',
    alt: 'Cover art for Big Wheel, showing a large monster truck wheel with reggae-themed colors and bold text.',
    title: 'Big Wheel',
    streamUrl: 'https://youtu.be/kK3IPgc3Adg',
    type: 'mix',
  }),
  withVideoId({
    src: '/images/QJbpBPg.jpeg',
    alt: 'Cover art for Crossfire & Ricochets, featuring a skull in a cowboy hat with two revolvers crossed in front of a desert landscape.',
    title: 'Crossfire & Ricochets',
    streamUrl: 'https://youtu.be/vsnDWrJHOQo',
    type: 'mix',
  }),
  withVideoId({
    src: '/images/ajkiz6DYmlU-maxresdefault.jpg',
    alt: 'Cover art for Chompin at the Bit, showing two masked DJs behind turntables with a city skyline on fire.',
    title: 'Chompin at the Bit',
    streamUrl: 'https://youtu.be/ajkiz6DYmlU',
    type: 'mix',
  }),
  withVideoId({
    src: '/images/clhudCwD8bU-hqdefault.jpg',
    alt: 'Cover art for Just a Little at a time, featuring a woman in sunglasses in a futuristic setting with two masked figures behind her.',
    title: 'Just a Little at a Time',
    streamUrl: 'https://youtu.be/clhudCwD8bU',
    type: 'video',
  }),
  withVideoId({
    src: '/images/w27Ms-1vLOc-maxresdefault.jpg',
    alt: 'Cover art for I Just Need Ya, showing a group of people with a retro, colorful vibe.',
    title: 'I Just Need Ya',
    streamUrl: 'https://youtu.be/w27Ms-1vLOc',
    type: 'video',
  }),
];

export const discography: CoverArtItem[] = curatedTracks;

export const featuredFallback: CoverArtItem | null =
  curatedTracks.find((track) => track.videoId === 'ajkiz6DYmlU') ?? null;