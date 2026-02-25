import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { PageContainer } from '@components/PageContainer'
import { PageTitle } from '@components/PageTitle'

function NotFoundPage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>The Next Step Dance Studio - Page Not Found</title>
        <meta
          name="description"
          content="The Next Step Dance Studio, we offer classes in a variety of dance styles. Creative Movement, Combo Classes, Hip Hop, Tap, Ballet, Jazz, Lyrical. Serving the Berks County area of Birdsboro, Douglassville, Morgantown, and Reading."
        />
      </Helmet>
      <PageContainer>
        <PageTitle>Page Not Found</PageTitle>
        <p>Please try to refresh the page or go back to the homepage.</p>
      </PageContainer>
    </>
  )
}

export default NotFoundPage
