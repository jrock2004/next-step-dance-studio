import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { Carousel } from '@components/Carousel'
import { PageContainer } from '@components/PageContainer'
import { PageTitle } from '@components/PageTitle'

const mockImages = [
  { id: 1, src: '/gallery/gallery-1.jpg', alt: 'Dancers performing on stage' },
  { id: 2, src: '/gallery/gallery-2.jpg', alt: 'Ballet class in progress' },
  { id: 3, src: '/gallery/gallery-3.jpg', alt: 'Hip hop dancers warming up' },
  { id: 4, src: '/gallery/gallery-4.jpg', alt: 'Recital performance' },
  { id: 5, src: '/gallery/gallery-5.jpg', alt: 'Young dancers at barre' },
  { id: 6, src: '/gallery/gallery-6.jpg', alt: 'Jazz class ensemble' },
]

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
        <div className="mt-20">
          <Carousel images={mockImages} />
        </div>
      </PageContainer>
    </>
  )
}

export default PhotosPage
