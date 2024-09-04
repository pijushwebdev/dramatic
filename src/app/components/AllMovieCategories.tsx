"use client";

import { movieCategoryArray } from "@/app/apis/movieCategoriesUrl";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import MoviesByCategoryClient from "./(myComponent)/MoviesByCategoryClient";


const AllMovieCategories = () => {
  const initialCategories = movieCategoryArray.slice(0, 2);
  const remainingCategories = movieCategoryArray.slice(2);

  const [isShow, setIsShow] = useState(false);

  const handleShowMore = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      {
        initialCategories.map((category, index) => (
          <MoviesByCategoryClient key={index} category={category}/>
        ))}

      {!isShow && (
        <button
          onClick={handleShowMore}
          className="text-offWhite font-bold text-lg py-1 px-3 bg-lilac_tone2 my-5 rounded-[20px] text-center mx-auto flex justify-center items-center gap-2"
        >
          Show More{" "}
          <span className="font-bold text-xl">
            <IoIosArrowDown />
          </span>
        </button>
      )}

      {isShow &&
        remainingCategories.map((category, index) => (
          <MoviesByCategoryClient key={index + remainingCategories.length} category={category}/>
        ))}
    </div>
  );
};

export default AllMovieCategories;
