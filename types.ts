
export interface ChatMessage {
  author: 'user' | 'bot';
  text: string;
}

export interface CoverArtItem {
  src: string;
  alt: string;
  title: string;
  streamUrl: string;
  videoId?: string;
  description?: string;
  publishedAt?: string;
  type?: 'video' | 'mix' | 'live';
}
