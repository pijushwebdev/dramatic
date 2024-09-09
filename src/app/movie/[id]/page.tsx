
import { fetchData } from "@/app/apis/api";
import DetailsPoster from "../../components/(myComponent)/DetailsPoster";
import CastTrailer from "@/app/components/(myComponent)/CastTrailer";
import { TVideo } from "@/app/types";

const MovieDetails = async ({params}:{params: {id: string}}) => {
    const movieId = params.id;
    const movie = await fetchData(`/movie/${movieId}`);

    const videosData = await fetchData(`/movie/${movieId}/videos?language=en-US`);
    const videos = videosData.results;

    const trailerVideo: TVideo = videos.find(
      (video: TVideo) => video.type === "Trailer" && video.name === "Official Trailer"
    );

    // thumbnail
    // const thumbnail = await fetchData(`https://img.youtube.com/vi/${trailerVideo.key}/0.jpg`);


  //   async function getTrailerThumbnail(videoKey: string) {
  //     const response = await fetch(`https://img.youtube.com/vi/${videoKey}/0.jpg`);
      
  //     if (!response.ok) {
  //         throw new Error('Failed to fetch thumbnail image');
  //     }
  
  //     // Convert the image response to a blob
  //     const blob = await response.blob();
  
  //     // Create a local URL for the image to use in the DOM
  //     const imageUrl = URL.createObjectURL(blob);
  
  //     return imageUrl;
  // }

  

    const castData = await fetchData(`/movie/${movieId}/credits`);
    const casts = castData.cast;


  return (
    <div className="pl-0 md:pl-24 max-w-[1440px] mx-auto">
        <DetailsPoster movie={movie}  />
        <CastTrailer video={trailerVideo} casts={casts}/>
    </div>
  );
};

export default MovieDetails;
