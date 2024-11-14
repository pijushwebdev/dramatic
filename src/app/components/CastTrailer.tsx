"use client";

import { TCastMember, TVideo } from "@/types";
import Image from "next/image";
import { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdClose,
  IoMdPlay,
} from "react-icons/io";
import {CastCard, SubHeading} from ".";




const CastTrailer = ({
  video,
  casts,
}: {
  video: TVideo;
  casts: TCastMember[];
}) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleWatchTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  const handleShowMore = () => {
    setIsShow(!isShow);
  };

  const initialMembers = casts.slice(0, 5);
  const remainingMembers = casts.slice(5);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-24 relative">
        {/* video */}
        <div className="">
          <SubHeading heading="Trailer" />
          <div className="relative">
            <div className="w-[300px] h-[170px] rounded-md overflow-hidden flex justify-center items-center">
              <div className="relative h-full">
                <Image
                  className="rounded-md p-0 m-0 h-full object-cover border border-slate-500"
                  src={
                    video?.key
                      ? `https://img.youtube.com/vi/${video?.key}/0.jpg`
                      : `https://i.ibb.co.com/xfMYmmq/unavailable.jpg`
                  }
                  alt="trailer"
                  width={300}
                  height={170}
                />

                <button
                  onClick={handleWatchTrailer}
                  className="absolute bg-white right-5 bottom-5 rounded-full p-2"
                >
                  <IoMdPlay />
                </button>
              </div>
            </div>

            {showTrailer && (
              <div className="fixed inset-0 z-40 justify-center flex w-full h-full top-0 left-1/2 -translate-x-1/2  bg-black bg-opacity-75 transition-opacity duration-300">
                <div className="relative w-[90%] max-w-3xl h-full max-h-96 transform scale-95 transition-transform duration-300 ease-out opacity-100 animate-fadeIn">
                  <iframe
                    width="560"
                    height="605"
                    src={`https://www.youtube.com/embed/${video?.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                  <button
                    onClick={handleWatchTrailer}
                    className="absolute z-50 -top-4 -right-3 text-white text-lg md:text-2xl lg:text-4xl"
                  >
                    <IoMdClose />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* video end */}

        {/* cast members */}

        <div className="flex-1 pb-10 ">
          <div>
            <SubHeading heading="CAST AND CREW INFO" />
          </div>

          <div>
            <div>
              <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 mt-5 text-white">
                {initialMembers.map((cast, index) => (
                  <CastCard key={index} cast={cast} />
                ))}
              </div>

              {!isShow && initialMembers.length > 0 && (
                <button
                  onClick={handleShowMore}
                  className="text-offWhite absolute -bottom-4 left-1/2 md:left-2/3    -translate-x-1/2 font-bold text-sm md:text-base lg:text-lg py-1 px-2 md:px-3 bg-lilac_tone2 rounded-[20px] text-center  flex justify-center items-center gap-2"
                >
                  Show More{" "}
                  <span className="flex items-center font-bold text-base md:text-lg lg:text-xl">
                    <IoIosArrowDown />
                  </span>
                </button>
              )}

              <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 mt-5">
                {isShow &&
                  remainingMembers.map((cast, index) => (
                    <CastCard
                      key={index + remainingMembers.length}
                      cast={cast}
                    />
                  ))}
              </div>

              {isShow && (
                <button
                  onClick={handleShowMore}
                  className="text-offWhite absolute -bottom-4 left-1/2 md:left-2/3    -translate-x-1/2 font-bold text-sm md:text-base lg:text-lg py-1 px-2 md:px-3 bg-lilac_tone2 rounded-[20px] text-center  flex justify-center items-center gap-2"
                >
                  Hide{" "}
                  <span className="font-bold text-xl">
                    <IoIosArrowUp />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CastTrailer;
