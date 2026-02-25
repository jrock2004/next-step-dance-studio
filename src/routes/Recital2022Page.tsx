import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { PageContainer } from '@components/PageContainer'
import { PageTitle } from '@components/PageTitle'

function Recital2022Page(): ReactElement {
  return (
    <>
      <Helmet>
        <title>The Next Step Dance Studio - Recital 2022</title>
        <meta
          name="description"
          content="The Next Step Dance Studio, we offer classes in a variety of dance styles. Creative Movement, Combo Classes, Hip Hop, Tap, Ballet, Jazz, Lyrical. Serving the Berks County area of Birdsboro, Douglassville, Morgantown, and Reading."
        />
      </Helmet>
      <PageContainer>
        <PageTitle>Recital 2022</PageTitle>

        <p>Coming Soon!!!!!</p>
      </PageContainer>
    </>
  )
}

export default Recital2022Page
