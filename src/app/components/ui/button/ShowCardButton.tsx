"use client";

import FetchDataClient from "../../(myComponent)/MoviesByCategoryClient"; 
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ShowCardButton = ({ category }: any ) => {

  
  const handleShowMore = () => {
    setIsShow(!isShow);
  };
  const [isShow, setIsShow] = useState(false);



  return (
    <div>
      {/* show more button */}
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

      {
        isShow &&
        <FetchDataClient category={category}/>
      }

    
    </div>
  );
};

export default ShowCardButton;
