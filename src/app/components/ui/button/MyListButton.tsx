'use client'
import { FaPlus } from "react-icons/fa";


const MyListButton = () => {
    return (
        <>
         <button className='watchButton text-xs capitalize md:uppercase lg:text-lg  lg:font-semibold font-thin  bg-[#5C5C5C] text-white lg:w-36 w-20 h-6 lg:h-10 justify-evenly rounded-md flex items-center'>MY LIST <FaPlus className='watchIcon text-xs md:text-base'/></button>  
        </>
    );
};

export default MyListButton;