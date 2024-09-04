"use client";

import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const BookmarkButton = () => {
  const [isBookmark, setIsBookmark] = useState(false);
  const handleBookmark = () => {
    setIsBookmark(!isBookmark);
  };
  return (
    <>
      <button onClick={handleBookmark}>
        {isBookmark ? (
          <span className="text-red-700">
            <FaHeart />
          </span>
        ) : (
            <span className="text-white">
            <FaHeart />
          </span>
        )}
      </button>
    </>
  );
};

export default BookmarkButton;
