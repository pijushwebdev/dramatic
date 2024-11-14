import { fetchData } from "@/app/apis/api";
import {
  DetailsPoster,
  SimilarMovies,
  SubHeading,
  CastTrailer,
} from "../../components";
import { TVideo } from "@/types";

const MovieDetails = async ({ params }: { params: { id: string } }) => {
  const movieId = params.id;
  const movie = await fetchData(`/movie/${movieId}`);

  const videosData = await fetchData(`/movie/${movieId}/videos?language=en-US`);
  const videos = videosData.results;

  const trailerVideo: TVideo = videos.find(
    (video: TVideo) =>
      video?.type === "Trailer" && video?.official === true && video?.site === "YouTube"
  );

  const castData = await fetchData(`/movie/${movieId}/credits`);
  const casts = castData.cast;

  const similarMoviesData = await fetchData(`/movie/${movieId}/similar`);

  return (
    <div className="pl-0 md:pl-24 max-w-[1440px] mx-auto">
      <DetailsPoster movie={movie} />

      <div className="relative top-0 md:-top-16 lg:-top-28 card-bg lg:card-bg2 py-3">
        <CastTrailer video={trailerVideo} casts={casts} />
      </div>

      <div className="mt-10 md:mt-0">
        { similarMoviesData?.results?.length > 0 && <SubHeading heading="More Like This" />}
        <SimilarMovies movies={similarMoviesData?.results} />
      </div>
    </div>
  );
};

export default MovieDetails;
