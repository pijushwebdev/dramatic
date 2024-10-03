import { fetchData } from "@/app/apis/api";
import CastTrailer from "@/app/components/(myComponent)/CastTrailer";
import DetailsPoster from "@/app/components/(myComponent)/movieComponents/DetailsPoster";
import SimilarMovies from "@/app/components/(myComponent)/movieComponents/SimilarMovies";
import SubHeading from "@/app/components/ui/SubHeading";
import { TVideo } from "@/app/types";

const MovieDetails = async ({ params }: { params: { id: string } }) => {
  const movieId = params.id;
  const movie = await fetchData(`/movie/${movieId}`);

  const videosData = await fetchData(`/movie/${movieId}/videos?language=en-US`);
  const videos = videosData.results;

  const trailerVideo: TVideo = videos.find(
    (video: TVideo) =>
      video.type === "Trailer" && video.name === "Official Trailer"
  );

  const castData = await fetchData(`/movie/${movieId}/credits`);
  const casts = castData.cast;

  const similarMoviesData = await fetchData(`/movie/${movieId}/similar`);


  return (
    <div className="pl-0 md:pl-24 max-w-[1440px] mx-auto">
      <DetailsPoster movie={movie} />

      <div className="relative top-0 md:-top-16 lg:-top-28 card-bg lg:card-bg2 pt-3">
        <CastTrailer video={trailerVideo} casts={casts} />
      </div>
      
      <div>
        <SubHeading heading="More Like This"/>
        <SimilarMovies movies={similarMoviesData?.results}/>

      </div>
    </div>
  );
};

export default MovieDetails;
