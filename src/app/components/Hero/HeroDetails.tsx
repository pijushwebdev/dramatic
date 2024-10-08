import { TGenre, TMovie } from "@/app/types";
import { IMAGE_URL } from "@/config";
import Image from "next/image";
import { fetchData } from "@/app/apis/api";
import { WatchButton, MyListButton } from '../../components';
import { jersey_10, montserrat } from "@/app/fonts/fonts";
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
      <div>
        <div className="relative top-0">
          <Image
            src={`${IMAGE_URL}${backdrop_path}`}
            alt={title ? title : "movie image"}
            width={1335}
            height={907}
            
            className="object-fill w-full max-h-[907px] overflow-hidden"
          />
          <div className="top-36 absolute z-10 left-3 max-w-[560px] text-left">
          <div className="mb-5 w-[400px] h-[100px]">
              <Image src={`${IMAGE_URL}${logoImg}`} width={500} height={100} alt="logo" />
            </div>
            <p
              className={`${montserrat.className} text-white font-normal lg:font-semibold`}
            >
              {overview}
            </p>
            <p className="text-[#FF2E00] mt-3 font-semibold">GENRES</p>
            {genresName.map((name, index) => (
              <span
                className="text-white font-normal lg:font-semibold"
                key={index}
              >
                | {name} |
              </span>
            ))}

            <div className="flex gap-3">
              <WatchButton />
              <MyListButton />
            </div>

            <div className="flex items-center lg:mt-5 mt-2 gap-2">
              <div className="w-6 h-2 lg:w-12 lg:h-6  flex items-center">
                <Image
                  className="object-fill w-6 h-2 lg:w-12 lg:h-6 "
                  width={54}
                  height={27}
                  src="https://i.ibb.co/0DBNqkP/e4a5b6be082941049058f053ee30d6a3.png"
                  alt="idb"
                />
              </div>

              <div className="flex items-center gap-2 text-white">
                <p className="text-yellow_tone font-normal lg:font-bold inline rounded-md px-0 md:px-1">{vote_average.toFixed(1)}</p>
                <p className="border border-white lg:font-medium font-light inline rounded-md px-0 md:px-1">U/A</p>
                <p className="border border-white lg:font-medium font-light inline rounded-md px-0 md:px-1">4K</p>
                <p className="lg:font-bold font-normal inline rounded-md px-0 md:px-1">{releaseYear}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroDetails;
