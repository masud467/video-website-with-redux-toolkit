import Footer from "../components/footer/Footer";
import RelatedVideoLists from "../components/list/RelatedVideoLists";
import Navbar from "../components/navbar/Navbar";
import Player from "../components/video/Player";
import VideoDescription from "../components/video/VideoDescription";

const Video = () => {
  return (
    <>
      <Navbar />
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
              {/* <!-- video player --> */}
              <Player />

              {/* <!-- video description --> */}
              <VideoDescription />
            </div>

            {/* <!-- related videos --> */}
            <RelatedVideoLists />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Video;
