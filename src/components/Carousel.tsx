import type { KeyboardEvent, ReactElement } from 'react'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import useMeasure from 'react-use-measure'

export type TCarouselImage = {
  id: number
  alt: string
  src: string
}

export type TCarousel = {
  images: TCarouselImage[]
}

type TVariants = {
  direction: string
  width: number
}

const variants = {
  enter: ({ direction, width }: TVariants) => ({
    x: direction === 'increasing' ? width : `-${width}`,
  }),
  center: { x: 0 },
  exit: ({ direction, width }: TVariants) => ({
    x: direction === 'increasing' ? `-${width}` : width,
  }),
}

export const Carousel = ({ images }: TCarousel): ReactElement => {
  const [ref, { width }] = useMeasure()
  const [count, setCount] = useState(1)
  const [tuple, setTuple] = useState([0, count])
  const [fullImage, setFullImage] = useState<TCarouselImage | null>(null)

  if (tuple[1] !== count) {
    setTuple([tuple[1], count])
  }

  const direction = count > tuple[0] ? 'increasing' : 'decreasing'

  const handlePrevClick = (): void => {
    const imageLength = images.length

    if (count === 1) {
      setCount(imageLength)
    } else {
      setCount(count - 1)
    }
  }

  const handleNextClick = (): void => {
    const imageLength = images.length

    if (count === imageLength) {
      setCount(1)
    } else {
      setCount(count + 1)
    }
  }

  const handleImageClick = (image: TCarouselImage): void => {
    setFullImage(image)
  }

  const handleRegionKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'ArrowLeft') handlePrevClick()
    else if (e.key === 'ArrowRight') handleNextClick()
    else if (e.key === 'Escape') setFullImage(null)
  }

  const handleImageKeyDown = (e: KeyboardEvent<HTMLDivElement>, image: TCarouselImage): void => {
    if (e.key === 'Enter') handleImageClick(image)
  }

  return (
    <>
      <div
        role="region"
        aria-label="Image slideshow"
        tabIndex={0}
        onKeyDown={handleRegionKeyDown}
        className="outline-none"
      >
        {/* Screen reader live region */}
        <span
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {images[count - 1].alt}
        </span>

        <div className="mt-4 flex justify-center">
          <div
            ref={ref}
            className="w-full h-96 md:h-[600px] bg-black flex items-center justify-center overflow-hidden relative rounded-lg"
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
                className="absolute w-full h-full flex items-center justify-center"
              >
                <div
                  className="relative w-full h-full"
                  tabIndex={0}
                  onKeyDown={(e): void => handleImageKeyDown(e, images[count - 1])}
                >
                  <img
                    className="absolute inset-0 w-full h-full object-contain hover:cursor-zoom-in"
                    src={images[count - 1].src}
                    alt={images[count - 1].alt}
                    onClick={(): void => handleImageClick(images[count - 1])}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Overlaid prev/next buttons */}
            <button
              aria-label="Go to the previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors z-10"
              onClick={handlePrevClick}
            >
              <ChevronLeftIcon className="w-7 h-7" />
            </button>
            <button
              aria-label="Go to the next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors z-10"
              onClick={handleNextClick}
            >
              <ChevronRightIcon className="w-7 h-7" />
            </button>

            {/* Counter overlay */}
            <span
              className="absolute bottom-3 right-4 text-white/70 text-sm tabular-nums z-10"
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
              className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black/90"
              role="dialog"
              aria-modal="true"
              aria-label="Full screen image"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full"
              >
                <img
                  className="absolute inset-0 w-full h-full object-contain hover:cursor-pointer"
                  src={fullImage.src}
                  alt={fullImage.alt}
                  onClick={(): void => {
                    setFullImage(null)
                  }}
                />
                <button
                  aria-label="Close full screen image"
                  onClick={(): void => {
                    setFullImage(null)
                  }}
                >
                  <XMarkIcon className="absolute top-4 right-6 w-9 h-9 bg-white" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
