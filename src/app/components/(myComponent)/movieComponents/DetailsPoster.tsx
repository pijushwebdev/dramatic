import { fetchData } from "@/app/apis/api";
import { jersey_10, montserrat } from "@/app/fonts/fonts";
import { IMAGE_URL } from "@/config";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { WatchButton, MyListButton, DownloadButton } from "../../index";
import { TGenre, TMovie } from "@/app/types";

const DetailsPoster = async ({ movie }: { movie: TMovie }) => {
  // const movie = await fetchData(`/movie/${paramId}`);

  const {
    id,
    vote_average,
    title,
    release_date,
    poster_path,
    overview,
    original_title,
    original_language,
    genres,
    backdrop_path,
    adult,
    tagline,
    status,
    spoken_languages,
    genre_ids,
  } = movie;

  let genresName: string[] = [];

  if (genre_ids) {
    const res = await fetchData("/genre/movie/list");
    const genresData = res.genres;

    genresName = genresData
      ?.filter((genre: TGenre) => genre_ids?.includes(genre.id))
      .map((genre: TGenre) => genre.name);
  }

  const movieImages = await fetchData(
    `/movie/${id}/images?include_image_language=en&language=en-US`
  );

  const logoImg = movieImages?.logos[0]?.file_path;

  const releaseYear = moment(release_date, "YYYY-MM-DD").year();

  let titleResized = "";
  {
    title.length > 25
      ? (titleResized = title.slice(0, 24))
      : (titleResized = title);
  }

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

          {/* logoImg */}
          <div className="lg:top-36 top-20 absolute z-10 left-3 text-left">
            {logoImg ?
              <div className="mb-5 lg:w-60 lg:h-10 md:w-30 md:h-14 w-24 h-10 ">
              <Image
                className="w-full h-full "
                src={`${IMAGE_URL}${logoImg}`}
                width={500}
                height={100}
                alt="logo"
              />
            </div> : <h1
              className={`${jersey_10.className} text-yellow_tone font-normal md:font-semibold lg:font-bold text-2xl md:text-4xl lg:text-6xl`}
            >
              {titleResized}
            </h1>
            }
            {/* logoImg end */}

            <p
              className={`${montserrat.className} text-white font-xs lg:font-semibold w-full leading-tight lg:leading-normal lg:w-2/3 lg:h-18`}
            >
              {overview.length > 260 ? (
                <span>{overview.slice(0, 260)}...</span>
              ) : (
                <span>{overview}</span>
              )}
            </p>
            <p className="text-[#FF2E00] mt-3 uppercase font-semibold">
              GENRES
            </p>
            {genres &&
              genres.map((genre: TGenre) => (
                <span
                  className="text-white font-normal lg:font-semibold"
                  key={genre.id}
                >
                  | {genre.name} |
                </span>
              ))}

            {genresName &&
              genresName.map((name, index) => (
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
              {genres &&
                <DownloadButton />
              }
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
                <p className="text-yellow_tone font-normal lg:font-bold inline rounded-md px-0 md:px-1">
                  {vote_average.toFixed(1)}
                </p>
                <p className="border border-white lg:font-medium font-light inline rounded-md px-0 md:px-1">
                  U/A
                </p>
                <p className="border border-white lg:font-medium font-light inline rounded-md px-0 md:px-1">
                  4K
                </p>
                <p className="lg:font-bold font-normal inline rounded-md px-0 md:px-1">
                  {releaseYear}
                </p>
              </div>
            </div>

            <div className="my-3">
              {spoken_languages && (
                <h1 className="text-[#FF2E00] uppercase font-semibold">
                  Subtitles
                </h1>
              )}

              <div>
                {spoken_languages &&
                  spoken_languages.map((item: any, index: number) => (
                    <p className="text-white inline font-semibold" key={index}>
                      {item?.english_name}
                      {index < spoken_languages.length - 1 && <span>, </span>}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPoster;
