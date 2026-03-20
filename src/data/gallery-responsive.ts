import type { TCarouselImage } from "@components/Carousel";

const GALLERY_BASE = "/gallery";
const WIDTHS = [640, 960, 1280, 1920] as const;

export function toCarouselImage(entry: { stem: string; alt: string }, index: number): TCarouselImage {
  const { stem, alt } = entry;
  const webpSrcSet = WIDTHS.map((w) => `${GALLERY_BASE}/${stem}-${w}.webp ${w}w`).join(", ");
  return {
    id: index + 1,
    alt,
    sizes: "(max-width: 768px) 100vw, min(90vw, 1200px)",
    carousel: {
      webpSrcSet,
      fallbackSrc: `${GALLERY_BASE}/${stem}-1280.jpg`,
    },
    lightbox: {
      webpSrc: `${GALLERY_BASE}/${stem}-lightbox.webp`,
      fallbackSrc: `${GALLERY_BASE}/${stem}-lightbox.jpg`,
    },
  };
}
