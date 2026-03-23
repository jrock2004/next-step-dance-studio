import type { KeyboardEvent, ReactElement } from "react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

export type TCarouselImage = {
  id: number;
  alt: string;
  sizes: string;
  carousel: {
    webpSrcSet: string;
    fallbackSrc: string;
  };
  lightbox: {
    webpSrc: string;
    fallbackSrc: string;
  };
};

export type TCarousel = {
  images: TCarouselImage[];
};

type TVariants = {
  direction: string;
  width: number;
};

const variants = {
  enter: ({ direction, width }: TVariants) => ({
    x: direction === "increasing" ? width : `-${width}`,
  }),
  center: { x: 0 },
  exit: ({ direction, width }: TVariants) => ({
    x: direction === "increasing" ? `-${width}` : width,
  }),
};

function CarouselSlidePicture({
  image,
  onClick,
  onKeyDown,
}: {
  image: TCarouselImage;
  onClick: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
}): ReactElement {
  return (
    <div
      className="relative h-full w-full"
      tabIndex={0}
      onKeyDown={(e): void => {
        onKeyDown(e);
      }}
    >
      <picture className="contents">
        <source type="image/webp" srcSet={image.carousel.webpSrcSet} sizes={image.sizes} />
        <img
          className="absolute inset-0 h-full w-full cursor-zoom-in object-contain"
          src={image.carousel.fallbackSrc}
          alt={image.alt}
          sizes={image.sizes}
          decoding="async"
          fetchPriority="high"
          onClick={onClick}
        />
      </picture>
    </div>
  );
}

function LightboxPicture({ image, onClose }: { image: TCarouselImage; onClose: () => void }): ReactElement {
  return (
    <picture className="contents">
      <source type="image/webp" src={image.lightbox.webpSrc} />
      <img
        className="absolute inset-0 h-full w-full cursor-pointer object-contain"
        src={image.lightbox.fallbackSrc}
        alt={image.alt}
        decoding="async"
        fetchPriority="high"
        onClick={onClose}
      />
    </picture>
  );
}

export const Carousel = ({ images }: TCarousel): ReactElement => {
  const [ref, { width }] = useMeasure();
  const [count, setCount] = useState(1);
  const [direction, setDirection] = useState<"increasing" | "decreasing">("increasing");
  const [fullImage, setFullImage] = useState<TCarouselImage | null>(null);

  const handlePrevClick = (): void => {
    const imageLength = images.length;

    if (count === 1) {
      setDirection("increasing");
      setCount(imageLength);
    } else {
      setDirection("decreasing");
      setCount(count - 1);
    }
  };

  const handleNextClick = (): void => {
    const imageLength = images.length;

    if (count === imageLength) {
      setDirection("decreasing");
      setCount(1);
    } else {
      setDirection("increasing");
      setCount(count + 1);
    }
  };

  const handleImageClick = (image: TCarouselImage): void => {
    setFullImage(image);
  };

  const handleRegionKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "ArrowLeft") handlePrevClick();
    else if (e.key === "ArrowRight") handleNextClick();
    else if (e.key === "Escape") setFullImage(null);
  };

  const handleImageKeyDown = (e: KeyboardEvent<HTMLDivElement>, image: TCarouselImage): void => {
    if (e.key === "Enter") handleImageClick(image);
  };

  const current = images[count - 1];

  return (
    <>
      <div
        role="region"
        aria-label="Image slideshow"
        tabIndex={0}
        onKeyDown={handleRegionKeyDown}
        className="outline-none"
      >
        <span aria-live="polite" aria-atomic="true" className="sr-only">
          {current.alt}
        </span>

        <div className="mt-4 flex justify-center">
          <div
            ref={ref}
            className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-lg bg-studio-dark md:h-[600px]"
          >
            <AnimatePresence custom={{ direction, width }}>
              <motion.div
                key={count}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={{ direction, width }}
                transition={{ duration: 0.5 }}
                className="absolute flex h-full w-full items-center justify-center"
              >
                <CarouselSlidePicture
                  image={current}
                  onClick={(): void => {
                    handleImageClick(current);
                  }}
                  onKeyDown={(e): void => handleImageKeyDown(e, current)}
                />
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              aria-label="Go to the previous image"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-studio-dark/50 p-2 text-white transition-colors hover:bg-studio-dark/75"
              onClick={handlePrevClick}
            >
              <ChevronLeftIcon className="h-7 w-7" />
            </button>
            <button
              type="button"
              aria-label="Go to the next image"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-studio-dark/50 p-2 text-white transition-colors hover:bg-studio-dark/75"
              onClick={handleNextClick}
            >
              <ChevronRightIcon className="h-7 w-7" />
            </button>

            <span
              className="absolute bottom-3 right-4 z-10 text-sm tabular-nums text-white/70"
              aria-hidden="true"
            >
              {count} / {images.length}
            </span>
          </div>
        </div>

        <AnimatePresence>
          {fullImage && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-studio-dark/90"
              role="dialog"
              aria-modal="true"
              aria-label="Full screen image"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative h-full w-full"
              >
                <LightboxPicture
                  image={fullImage}
                  onClose={(): void => {
                    setFullImage(null);
                  }}
                />
                <button
                  type="button"
                  aria-label="Close full screen image"
                  className="absolute right-6 top-4"
                  onClick={(): void => {
                    setFullImage(null);
                  }}
                >
                  <XMarkIcon className="h-9 w-9 bg-white" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
