import { HERO_IMAGE_JPG, HERO_IMAGE_WEBP } from '../constants/hero';

const MIN_DISPLAY_MS = 1400;
const MAX_WAIT_MS = 4000;

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

export async function preloadHeroBackground(): Promise<void> {
  const supportsWebp = await checkWebpSupport();
  if (supportsWebp) {
    await preloadImage(HERO_IMAGE_WEBP);
  }
  await preloadImage(HERO_IMAGE_JPG);
}

async function checkWebpSupport(): Promise<boolean> {
  if (typeof document === 'undefined') return false;
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img.width > 0 && img.height > 0);
    img.onerror = () => resolve(false);
    img.src =
      'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=';
  });
}

function waitForWindowLoad(): Promise<void> {
  if (document.readyState === 'complete') {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    window.addEventListener('load', () => resolve(), { once: true });
  });
}

export function waitForAppReady(): Promise<void> {
  const minDelay = new Promise<void>((resolve) =>
    setTimeout(resolve, MIN_DISPLAY_MS)
  );
  const maxDelay = new Promise<void>((resolve) =>
    setTimeout(resolve, MAX_WAIT_MS)
  );

  return Promise.race([
    Promise.all([waitForWindowLoad(), preloadHeroBackground(), minDelay]).then(
      () => undefined
    ),
    maxDelay,
  ]);
}