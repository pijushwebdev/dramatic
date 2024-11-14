"use client";

import { RemainCategorySection } from "..";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const MoviesByCategoryClient = ({
  categories,
}: {
  categories: { title: string; apiUrl: string }[];
}) => {
  const [isShow, setIsShow] = useState(false);

  const handleShowMore = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="text-white">
      {!isShow && (
        <button
          onClick={handleShowMore}
          className="text-offWhite font-bold text-sm md:text-base lg:text-lg py-1 px-2 md:px-3 bg-lilac_tone2 my-5 rounded-[20px] text-center mx-auto flex justify-center items-center gap-2  transition-all duration-200 hover:text-lilac_tone"
        >
          Show More{" "}
          <span className="font-bold text-xl">
            <IoIosArrowDown />
          </span>
        </button>
      )}
      {/* Iterate through each category */}
      {isShow &&
        categories.map((category, index) => (
          <RemainCategorySection key={index} category={category} />
        ))}
    </div>
  );
};

export default MoviesByCategoryClient;
