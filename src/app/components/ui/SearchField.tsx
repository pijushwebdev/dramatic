"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";


const SearchField = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (!query.trim()) return;

    if (query.trim().length > 0) {
      router.push(`/search/${query}`)
    }
  };

  return (
    <>
      <label className="relative w-full" htmlFor="search">
        <input
          className="py-0 lg:py-2 pe-8 ps-5 w-full rounded-[19px] bg-[#3B567D] text-[#A2B3CD] outline-none placeholder:font-semibold md:placeholder:font-bold placeholder:uppercase placeholder:text-xs md:placeholder:text-base"
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleSearch}
        />
        <span className="absolute right-0 top-3 md:right-2 md:top-4 lg:top-6 text-white -translate-y-1/2 ">
          <button onClick={handleSearch} className="text-xs md:text-base md:px-2 px-3">
            
            <FaSearch />
          </button>
        </span>
      </label>
    </>
  );
};

export default SearchField;
