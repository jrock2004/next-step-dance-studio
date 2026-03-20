import type { ReactElement } from "react";
import { Helmet } from "react-helmet-async";
import { Carousel } from "@components/Carousel";
import { PageContainer } from "@components/PageContainer";
import { PageTitle } from "@components/PageTitle";
import { galleryManifest } from "@/data/gallery-manifest.gen";
import { toCarouselImage } from "@/data/gallery-responsive";

const galleryImages = galleryManifest.map(toCarouselImage);

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
            <p className="py-20 text-center text-gray-500">
              No photos yet — add JPEGs to <code className="font-mono text-sm">src/assets/gallery</code>{" "}
              and run <code className="font-mono text-sm">pnpm optimize:gallery</code>.
            </p>
          )}
        </div>
      </PageContainer>
    </>
  );
}

export default PhotosPage;
