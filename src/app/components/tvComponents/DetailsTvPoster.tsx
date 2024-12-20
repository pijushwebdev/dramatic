
import { fetchData } from "@/app/apis/api";
import { style_Script, montserrat } from "@/fonts/fonts";
import { IMAGE_URL } from "@/config";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { WatchButton, MyListButton, DownloadButton } from "..";
import { TGenre } from "@/types";

const DetailsTvPoster = async ({ tv }: { tv: any }) => {
  const {
    id,
    vote_average,
    name,
    first_air_date,
    overview,
    genres,
    backdrop_path,
    spoken_languages,
    genre_ids,
  } = tv;

  let genresName: string[] = [];

  if (genre_ids) {
    const res = await fetchData("/genre/tv/list");
    const genresData = res.genres;

    genresName = genresData
      ?.filter((genre: TGenre) => genre_ids?.includes(genre.id))
      .map((genre: TGenre) => genre.name);
  }

  const tvImages = await fetchData(
    `/tv/${id}/images?include_image_language=en&language=en-US`
  );

  const logoImg = tvImages?.logos[0]?.file_path;
  const releaseYear = moment(first_air_date, "YYYY-MM-DD").year();
  const nameResized = name.length > 25 ? name.slice(0, 24) : name;

  return (
    <>
      <div>
        <div className="relative top-0">
          <Image
            src={backdrop_path?.length > 0 ? `${IMAGE_URL}${backdrop_path}` : "https://i.ibb.co.com/TWNP0xP/Whats-App-Image-2024-11-15-at-11-31-09-267a8f1d.jpg"}
            alt={name || "movie image"}
            width={1335}
            height={907}
            className="object-fill w-full h-[400px] md:h-[700px] lg:h-[907px] overflow-hidden"
          />

          <div className="absolute top-12 sm:top-16 md:top-20 lg:top-36 left-3 sm:left-6 md:left-10 lg:left-12 z-10 text-left">
            {logoImg ? (
              <div className="mb-5 w-24 h-10 sm:w-32 sm:h-12 md:w-40 md:h-14 lg:w-60 lg:h-20">
                <Image
                  className="w-full h-full"
                  src={`${IMAGE_URL}${logoImg}`}
                  width={500}
                  height={100}
                  alt="logo"
                />
              </div>
            ) : (
              <h1
                className={`${style_Script.className} text-yellow_tone font-normal md:font-semibold lg:font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl pb-1 md:pb-3`}
              >
                {nameResized}
              </h1>
            )}

            <p
              className={`${montserrat.className} truncate text-wrap  text-white font-xs text-xs sm:text-sm md:text-base lg:font-semibold w-full sm:w-4/5 md:w-3/4 lg:w-2/3 leading-3 md:leading-4 lg:leading-6`}
            >
              {overview.length > 260 ? `${overview.slice(0, 260)}...` : overview}
              {/* {overview} */}
            </p>

            <p className="text-[#FF2E00] mt-3 uppercase font-semibold text-sm md:text-base">GENRES</p>
            <div className="flex flex-wrap gap-1">
              {genres && genres.map((genre: TGenre) => (
                <span className="text-white font-normal lg:font-semibold text-xs sm:text-sm md:text-base" key={genre.id}>
                  | {genre.name} |
                </span>
              ))}
              {genresName && genresName.map((name, index) => (
                <span className="text-white font-normal lg:font-semibold text-xs sm:text-sm md:text-base" key={index}>
                  | {name} |
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-2 md:mt-4 items-center">
              <WatchButton />
              <MyListButton />
              {genres && <DownloadButton />}
            </div>

            <div className="flex items-center mt-3 lg:mt-5 gap-2 text-xs sm:text-sm md:text-base">
              <div className="w-4 h-2 sm:w-6 sm:h-3 lg:w-12 lg:h-6">
                <Image
                  className="object-contain w-full h-full"
                  width={54}
                  height={27}
                  src="https://i.ibb.co/0DBNqkP/e4a5b6be082941049058f053ee30d6a3.png"
                  alt="IMDb logo"
                />
              </div>

              <div className="flex items-center gap-1 sm:gap-2 text-white">
                <p className="text-yellow_tone font-normal lg:font-bold inline rounded-md px-1">
                  {vote_average.toFixed(1)}
                </p>
                <p className="border border-white font-light lg:font-medium inline rounded-md px-1">U/A</p>
                <p className="border border-white font-light lg:font-medium inline rounded-md px-1">4K</p>
                <p className="font-normal lg:font-bold inline rounded-md px-1">{releaseYear}</p>
              </div>
            </div>

            {spoken_languages && (
              <div className="my-3">
                <h1 className="text-[#FF2E00] uppercase font-semibold text-sm md:text-base">Subnames</h1>
                <div>
                  {spoken_languages.map((item: any, index: number) => (
                    <p className="text-white inline font-semibold text-xs sm:text-sm md:text-base" key={index}>
                      {item.english_name}
                      {index < spoken_languages.length - 1 && <span>, </span>}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsTvPoster;
