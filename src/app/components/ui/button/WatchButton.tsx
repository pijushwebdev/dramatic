'use client'


import { IoMdPlay } from 'react-icons/io';

const WatchButton = () => {
    return (
        <>
          <button className='watchButton text-xs capitalize md:uppercase lg:text-lg  lg:font-semibold font-thin  bg-[#5436A9] text-white lg:w-36 w-20 h-6 lg:h-10 justify-evenly rounded-md flex items-center'>Watch <IoMdPlay className='watchIcon text-xs md:text-base'/></button>  
        </>
    );
};

export default WatchButton;

