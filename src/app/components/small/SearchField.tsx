import { FaSearch } from "react-icons/fa";
const SearchField = () => {
  return (
    <>
      <label className="relative w-full" htmlFor="search">
        <input
          className="py-2 pe-8 ps-5 w-full rounded-[19px] bg-[#3B567D] text-[#A2B3CD] outline-none placeholder:font-bold placeholder:uppercase"
          type="text"
          placeholder="Search"
        />
        <span className="absolute right-2 top-1/2 text-white -translate-y-1/2">
          {" "}
          <button className="w-5 h-5"><FaSearch /></button>
          {" "}
        </span>
      </label>
    </>
  );
};

export default SearchField;
