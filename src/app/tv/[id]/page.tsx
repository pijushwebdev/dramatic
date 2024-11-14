import { fetchData } from "@/app/apis/api";
import {
  SimilarMovies,
  SubHeading,
  CastTrailer,
  DetailsTvPoster,
} from "../../components";
import { TVideo } from "@/types";

const TV = async ({ params }: { params: { id: string } }) => {
  const tvId = params.id;
  const tv = await fetchData(`/tv/${tvId}`);

  const videosData = await fetchData(`/tv/${tvId}/videos?language=en-US`);
  const videos = videosData.results;

  const trailerVideo: TVideo = videos.find(
    (video: TVideo) =>
      video?.type === "Trailer" &&
      video?.official === true &&
      video?.site === "YouTube"
  );

  const castData = await fetchData(`/tv/${tvId}/credits`);
  const casts = castData.cast;

  const similarTvData = await fetchData(`/tv/${tvId}/similar`);

  return (
    <div className="pl-0 md:pl-24 max-w-[1440px] mx-auto">
      <DetailsTvPoster tv={tv} />

      <div className="relative top-0 md:-top-16 lg:-top-28 card-bg lg:card-bg2 py-3">
        <CastTrailer video={trailerVideo} casts={casts} />
      </div>

      <div className="mt-10 md:mt-0">

        { similarTvData?.results?.length > 0 && (
          <SubHeading heading="More Like This" />
        )}
        <SimilarMovies movies={similarTvData?.results} />
      </div>
    </div>
  );
};

export default TV;
