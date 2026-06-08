
import GallerySection from "../../components/media/GallerySection";
import VideoSection from "../../components/media/VideoSection";
import LibrarySection from "../../components/media/LibrarySection";
import MediaHero from "../../components/media/Mediahero";


export default function Media() {
  return (
    <div className="min-h-screen text-white">

      <MediaHero />
      <div className="md:px-10 lg:px-20 space-y-12">
        <GallerySection />
        <VideoSection />
        <LibrarySection />
      </div>
    </div>
  );
}