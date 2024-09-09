'use client'


import { IoMdPlay } from 'react-icons/io';

const WatchButton = () => {
    return (
        <>
          <button className='watchButton text-xs lg:text-lg  lg:font-semibold font-thin lg:mt-5 mt-2 md:mt-3 bg-[#5436A9] text-white lg:w-36 w-20 h-8 lg:h-10 justify-evenly rounded-md flex items-center'>WATCH <IoMdPlay className='watchIcon'/></button>  
        </>
    );
};

export default WatchButton;

