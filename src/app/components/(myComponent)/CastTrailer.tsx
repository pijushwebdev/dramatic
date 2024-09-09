"use client";

import { TCastMember, TVideo } from "@/app/types";
import Image from "next/image";
import { useState } from "react";
import { IoMdClose, IoMdPlay } from "react-icons/io";

const CastTrailer = ({
  video,
  casts,
}: {
  video: TVideo;
  casts: TCastMember[];
}) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const handleWatchTrailer = () => {
    setShowTrailer(!showTrailer);
  };
  return (
    <div>
      <div>
        {/* video */}
        <div>
          <h1 className="uppercase text-white font-bold">{video!?.type}</h1>
          <div className="relative">
            <div className="w-[300px] h-[170px] rounded-md overflow-hidden flex justify-center items-center">
              <div className="relative">
                <Image
                  className="rounded-md p-0 m-0"
                  layout="fixed"
                  src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
                  alt="trailer"
                  width={300}
                  height={150}
                />

                <button
                  onClick={handleWatchTrailer}
                  className="absolute bg-white right-5 bottom-10 rounded-full p-2"
                >
                  <IoMdPlay />
                </button>
              </div>
            </div>

            {showTrailer && (
              <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300">
                <div className="relative w-[90%] max-w-3xl h-1/2 max-h-96 transform scale-95 transition-transform duration-300 ease-out opacity-100 animate-fadeIn">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video?.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                  <button
                    onClick={handleWatchTrailer}
                    className="absolute top-2 right-2 text-white text-2xl"
                  >
                    <IoMdClose />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* video end */}

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default CastTrailer;
