import { TGenre, TMovie } from "@/types";
import { IMAGE_URL } from "@/config";
import Image from "next/image";
import { fetchData } from "@/app/apis/api";
import { WatchButton, MyListButton } from '..';
import { montserrat } from "@/fonts/fonts";
import moment from "moment";

const HeroDetails = async ({ movie }: { movie: TMovie }) => {
  const {
    id,
    vote_average,
    title,
    release_date,
    poster_path,
    overview,
    original_title,
    original_language,
    genre_ids,
    backdrop_path,
    adult,
  } = movie;

  const movieImages = await fetchData(`/movie/${id}/images?include_image_language=en&language=en-US`);
  const logoImg = movieImages?.logos[0]?.file_path;
  const releaseYear = moment(release_date, 'YYYY-MM-DD').year();

  const res = await fetchData("/genre/movie/list");
  const genresData = res.genres;

  const genresName: string[] = genresData
    ?.filter((genre: TGenre) => genre_ids?.includes(genre.id))
    .map((genre: TGenre) => genre.name);

  return (
    <>
      <div className="relative">
        <Image
          src={`${IMAGE_URL}${backdrop_path}`}
          alt={title || "movie image"}
          width={1335}
          height={907}
          className="object-cover w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[907px] overflow-hidden"
        />
        <div className="absolute top-12 left-4 sm:top-20 sm:left-8 lg:top-36 lg:left-12 max-w-[90%] md:max-w-[75%] lg:max-w-[560px] z-10 text-left">
          {logoImg && (
            <div className="mb-4 w-full sm:w-[300px] md:w-[400px] h-[50px] sm:h-[75px] md:h-[100px]">
              <Image src={`${IMAGE_URL}${logoImg}`} width={500} height={100} alt="logo" />
            </div>
          )}
          <p className={`${montserrat.className} text-white font-thin lg:font-semibold text-sm sm:text-base md:text-lg`}>
            {overview}
          </p>
          <p className="text-[#FF2E00] mt-3 font-semibold text-sm md:text-base">GENRES</p>
          <div className="flex flex-wrap gap-1">
            {genresName.map((name, index) => (
              <span
                className="text-white font-normal lg:font-semibold text-xs sm:text-sm md:text-base"
                key={index}
              >
                | {name} |
              </span>
            ))}
          </div>

          <div className="flex gap-2 mt-4 sm:mt-6">
            <WatchButton />
            <MyListButton />
          </div>

          <div className="flex items-center mt-2 sm:mt-4 lg:mt-5 gap-2 text-xs sm:text-sm md:text-base">
            <div className="w-4 h-2 sm:w-6 sm:h-3 lg:w-12 lg:h-6 flex items-center">
              <Image
                className="object-contain w-full h-full"
                width={54}
                height={27}
                src="https://i.ibb.co/0DBNqkP/e4a5b6be082941049058f053ee30d6a3.png"
                alt="idb"
              />
            </div>

            <div className="flex items-center gap-1 sm:gap-2 text-white">
              <p className="text-yellow_tone font-normal lg:font-bold inline rounded-md px-0 sm:px-1">
                {vote_average.toFixed(1)}
              </p>
              <p className="border border-white lg:font-medium font-light inline rounded-md px-0 sm:px-1">U/A</p>
              <p className="border border-white lg:font-medium font-light inline rounded-md px-0 sm:px-1">4K</p>
              <p className="lg:font-bold font-normal inline rounded-md px-0 sm:px-1">{releaseYear}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroDetails;
