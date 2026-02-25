import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'

function HomePage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>The Next Step Dance Studio - Home</title>
        <meta
          name="description"
          content="The Next Step Dance Studio, we offer classes in a variety of dance styles. Creative Movement, Combo Classes, Hip Hop, Tap, Ballet, Jazz, Lyrical. Serving the Berks County area of Birdsboro, Douglassville, Morgantown, and Reading."
        />
      </Helmet>
      <div className="relative h-96 md:h-[500px] w-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://nebula.wsimg.com/94dd88ad6b74d735b23b8e19faeb666b?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1"
          alt="The Next Step Dance Studio"
        />
      </div>
      <div className="bg-black text-pink-400 flex justify-center py-8 mb-12">
        <h2 className="sm:text-3xl">Date to dance.. date to take the NEXT STEP!</h2>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-3">Celebrating our 17th season!</h3>
        <div>
          <img
            height={234}
            width={201}
            src="https://nebula.wsimg.com/c956d2eb3c6f4223730168289b83265a?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1"
            alt="Celebrating our 17th season!"
          />
        </div>
      </div>
      <div className="mt-12 grid grid-rows-2 gap-12 px-10 lg:grid-cols-2">
        <div className="border rounded shadow-md p-4">
          <h4 className="text-xl font-semibold mb-4">Welcome to The Next Step Dance Studio</h4>
          <div className="flex flex-col gap-4">
            <p>
              Help your child develop confidence, creativity, and a love for the arts, while making
              friends and having fun in the process.
            </p>
            <p>
              We are committed to building each dancer with a foundation that will last a lifetime
              on and off the dance floor!
            </p>
          </div>
        </div>
        <div className="border rounded shadow-md p-4">
          <h4 className="text-xl font-semibold mb-4">
            We offer classes in a variety of dance styles
          </h4>
          <ul className="list-disc pl-10">
            <li>Creative Movement (ages 3-4)</li>
            <li>Combo (ages 5-6)</li>
            <li>Hip Hop</li>
            <li>Tap</li>
            <li>Jazz</li>
            <li>Ballet</li>
            <li>Lyrical</li>
            <li>Acro</li>
            <li>Adult Classes</li>
            <li>Private Instruction</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default HomePage
