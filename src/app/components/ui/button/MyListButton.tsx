'use client'
import { FaPlus } from "react-icons/fa";


const MyListButton = () => {
    return (
        <>
         <button className='watchButton text-xs lg:text-lg  lg:font-semibold font-thin lg:mt-5 mt-2 md:mt-3 bg-[#5C5C5C] text-white lg:w-36 w-20 h-8 lg:h-10 justify-evenly rounded-md flex items-center'>MY LIST <FaPlus className='watchIcon'/></button>  
        </>
    );
};

export default MyListButton;