import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { AddressInfo } from '@components/AddressInfo'
import { PageContainer } from '@components/PageContainer'
import { PageTitle } from '@components/PageTitle'
import { StudioMap } from '@components/StudioMap'

function LocationPage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>The Next Step Dance Studio - Location</title>
        <meta
          name="description"
          content="The Next Step Dance Studio, we offer classes in a variety of dance styles. Creative Movement, Combo Classes, Hip Hop, Tap, Ballet, Jazz, Lyrical. Serving the Berks County area of Birdsboro, Douglassville, Morgantown, and Reading."
        />
      </Helmet>
      <PageContainer>
        <PageTitle>Location</PageTitle>
        <div className="relative h-64 md:h-96 mb-6 overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src="https://nebula.wsimg.com/daf19c9ee0935bf612a721103f758062?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1"
            alt="The Next Step Dance Studio"
          />
        </div>
        <div className="mb-6">
          <p className="text-center text-sm">The Next Step Dance Studio</p>
          <AddressInfo align="center" />
        </div>
        <div className="mb-14">
          <StudioMap />
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <div className="border rounded shadow-md p-4 sm:max-w-lg">
            <h4 className="text-xl font-semibold mb-4">From Reading, PA and points West</h4>
            <p className="text-sm leading-7">
              Head eastbound on Route 422. Turn right onto South Center Road (Route 345 South) and
              go approximately 1 mile. Turn left onto West Main Street (Route 724 E & 345 S).
              Approximately 1/2 mile down West Main Street turn right onto Chestnut Street and the
              studio is located on the right-hand side.
            </p>
          </div>
          <div className="border rounded shadow-md p-4 sm:max-w-lg">
            <h4 className="text-xl font-semibold mb-4">From Pottstown, PA and points East</h4>
            <p className="text-sm leading-7">
              Head westbound on Route 422 (turns into Ben Franklin Highway). Turn right onto South
              Center Road (Route 345 South) and go approximately 1 mile. Turn left onto West Main
              Street (Route 724 E & 345 S). Approximately 1/2 mile down West Main Street turn right
              onto Chestnut Street and the studio is located on the right-hand side.
            </p>
          </div>
        </div>
      </PageContainer>
    </>
  )
}

export default LocationPage
