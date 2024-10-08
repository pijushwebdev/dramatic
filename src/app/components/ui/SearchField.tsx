"use client";
import { fetchData } from "@/app/apis/api";
import { ClientSideFetching } from "@/app/apis/clientSideApi";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchField = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const result = ClientSideFetching(`/search/multi/${query}`);
  console.log(result);
  const handleSearch = (e: any) => {
    e.preventDefault();
    if(!query.trim()) return;
    
    if (e.key === "Enter" || query.length > 0) {
     
    }
  };

  return (
    <>
      <label className="relative w-full" htmlFor="search">
        <input
          className="py-2 pe-8 ps-5 w-full rounded-[19px] bg-[#3B567D] text-[#A2B3CD] outline-none placeholder:font-bold placeholder:uppercase"
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleSearch}
        />
        <span className="absolute right-2 top-6 text-white -translate-y-1/2 ">
          <button className="w-5 h-5">
            <FaSearch />
          </button>
        </span>
      </label>
    </>
  );
};

export default SearchField;
