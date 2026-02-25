import type { ReactElement } from 'react'
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

  return (
    <>
      <div>
        <div className="flex justify-between">
          <button
            aria-label="Go to the previous image"
            className="border border-slate-300 p-2 rounded hover:bg-slate-50"
            onClick={handlePrevClick}
          >
            <ChevronLeftIcon className="w-7 h-7" />
          </button>
          <button
            aria-label="Go to the next image"
            className="border border-slate-300 p-2 rounded hover:bg-slate-50"
            onClick={handleNextClick}
          >
            <ChevronRightIcon className="w-7 h-7" />
          </button>
        </div>
        <div className="mt-8 flex justify-center">
          <div
            ref={ref}
            className="w-full h-96 md:h-[500px] bg-gray-700 flex items-center justify-center overflow-hidden relative rounded-lg"
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
                className={`absolute w-full h-full flex items-center justify-center text-white`}
              >
                <div className="relative w-full h-full">
                  <img
                    className="absolute inset-0 w-full h-full object-cover hover:cursor-pointer"
                    src={images[count - 1].src}
                    alt={images[count - 1].alt}
                    onClick={(): void => {
                      handleImageClick(images[count - 1])
                    }}
                  />
                  <span className="bg-slate-50 text-black p-2 absolute bottom-9 left-1/2 transform -translate-x-1/2">
                    {images[count - 1].alt}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {fullImage && (
          <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-white">
            <div className="relative w-full h-full">
              <img
                className="absolute inset-0 w-full h-full object-cover hover:cursor-pointer"
                src={fullImage.src}
                alt={fullImage.alt}
                onClick={(): void => {
                  setFullImage(null)
                }}
              />
              <button
                onClick={(): void => {
                  setFullImage(null)
                }}
              >
                <XMarkIcon className="absolute top-4 right-6 w-9 h-9 bg-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
