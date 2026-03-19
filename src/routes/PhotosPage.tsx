import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { Carousel } from '@components/Carousel'
import { PageContainer } from '@components/PageContainer'
import { PageTitle } from '@components/PageTitle'

const imageModules = import.meta.glob('../assets/gallery/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const galleryImages = Object.entries(imageModules).map(([path, src], index) => {
  const filename = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? ''
  const label = filename.replace(/[-_]/g, ' ')
  // Suppress raw camera filenames (e.g. "DSC 1855", "IMG 2034")
  const isCameraFilename = /^(DSC|IMG|DSCN|DCIM|DSF|MVI)[_ -]?\d+$/i.test(filename)
  const alt = isCameraFilename ? `Gallery photo ${index + 1}` : label
  return { id: index + 1, src, alt }
})

function PhotosPage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>Gallery — Next Step Dance Studio</title>
        <meta
          name="description"
          content="Browse photos from Next Step Dance Studio classes, recitals, and performances in Birdsboro, PA."
        />
      </Helmet>
      <PageContainer>
        <PageTitle>Gallery</PageTitle>
        <div className="mt-8">
          {galleryImages.length > 0 ? (
            <Carousel images={galleryImages} />
          ) : (
            <p className="text-center text-gray-500 py-20">
              No photos yet — check back soon!
            </p>
          )}
        </div>
      </PageContainer>
    </>
  )
}

export default PhotosPage
