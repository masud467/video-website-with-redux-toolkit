import { useDispatch, useSelector } from "react-redux";
import RelatedVideoLists from "../components/list/RelatedVideoLists";
import Player from "../components/video/Player";
import VideoDescription from "../components/video/VideoDescription";
import { useEffect } from "react";
import { fetchVideo } from "../features/singleVideo/videoSlice";
import { useParams } from "react-router";
import Loading from "../components/ui/Loading";

const Video = () => {
  const dispatch = useDispatch();
  // const params = useParams();
  // console.log(params);
  const { videoId } = useParams();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  const { id, link, title, tags } = video || {};

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && !video?.id)
    content = <div className="col-span-12">No video found!</div>;
  if (!isLoading && !isError && video?.id)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          {/* <!-- video player --> */}
          <Player link={link} title={title} />

          {/* <!-- video description --> */}
          <VideoDescription video={video} />
        </div>

        {/* <!-- related videos --> */}
        <RelatedVideoLists currentVideoId={id} tags={tags} />
      </div>
    );
  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default Video;
