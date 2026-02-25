import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { Carousel } from '@components/Carousel'
import { PageContainer } from '@components/PageContainer'
import { PageTitle } from '@components/PageTitle'

const mockImages = [
  {
    id: 1,
    src: 'https://nebula.wsimg.com/6649c652c33d47c6694975717b47131d?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    alt: 'Teaching the girls to dance',
  },
  {
    id: 2,
    src: 'https://nebula.wsimg.com/5359de8540918c74f2ada85af679f19c?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    alt: 'Having fun doing hip hop',
  },
  {
    id: 3,
    src: 'https://nebula.wsimg.com/485a8b42953d61b37ec92f574103474c?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    alt: 'The girls are stretching',
  },
]

function PhotosPage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>The Next Step Dance Studio - Photos</title>
        <meta
          name="description"
          content="The Next Step Dance Studio, we offer classes in a variety of dance styles. Creative Movement, Combo Classes, Hip Hop, Tap, Ballet, Jazz, Lyrical. Serving the Berks County area of Birdsboro, Douglassville, Morgantown, and Reading."
        />
      </Helmet>
      <PageContainer>
        <PageTitle>Photos</PageTitle>
        <div className="mt-20">
          <Carousel images={mockImages} />
        </div>
      </PageContainer>
    </>
  )
}

export default PhotosPage
