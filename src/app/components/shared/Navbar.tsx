"use client";

import { FiGift, FiMenu, FiDownload, FiSettings } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import Image from "next/image";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineBars } from "react-icons/ai";
import { IoMdClose } from 'react-icons/io'
import React, { useState } from "react";
import useDeviceWidth from "../../hooks/useDeviceWidth";
import { usePathname } from "next/navigation";
import { griffy } from "../../fonts/fonts";
import { CustomButton, CustomNavLink, SearchField } from "..";


const Navbar = () => {

  const deviceWidth = useDeviceWidth();
  const [isOpen, setIsOpen] = useState(false);

  const menuOpener = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  

  const navLinks = <>
          <CustomNavLink linkStyles={pathname == '/' ? "text-grey_tone font-bold activeLink" : 'text-grey_tone font-bold'} href={"/"} title="Home" />
          <CustomNavLink linkStyles={pathname == '/tv_show' ? "text-grey_tone font-bold activeLink" : 'text-grey_tone font-bold'} href={"/tv_show"} title="Tv Show" />
          <CustomNavLink linkStyles={pathname == '/movies' ? "text-grey_tone font-bold activeLink" : 'text-grey_tone font-bold'} href={"/movies"} title="Movies" />
          <CustomNavLink linkStyles={pathname == '/new' ? "text-grey_tone font-bold activeLink" : 'text-grey_tone font-bold'} href={"/new"} title="New" />      
          </>
 

const navButtons = <>
  <CustomButton  btnStyle="text-white" BtnIcon={<FiGift />} />

  { deviceWidth > 750 && <CustomButton btnStyle="text-white" BtnIcon={<FaRegBell />} />}

  <CustomButton
    profileImg={true}
    BtnIcon={
      <Image
        alt="profile"
        width={50}
        height={50}
        title="Profile"
        priority={true}
        src={`https://i.ibb.co/BqBLYwL/userpng.png`}
      />}
    />
    
  </>

  return (
    <div className={`navBgColor absolute top-0 z-50`}>
      <div
        id="nav-container"
        className={`max-w-[1440px] mx-auto px-5 relative lg:h-24 grid grid-cols-12 py-2 md:py-4 lg:py-0 place-content-center`}>
        <div className="flex items-center col-span-4 md:col-span-3 xl:col-span-2">
          <CustomNavLink
            href={"/"}
            title={"Dramatic"}
            linkStyles={`text-2xl md:text-3xl lg:text-4xl text-yellow_tone ${griffy.className}`}
          />
        </div>

        <div
          id="nav-links"
          className={`hidden xl:flex items-center justify-around xl:col-span-4`}
        >
          { navLinks }

        </div>

        <div className="flex items-center col-span-7 md:col-span-4 xl:col-span-3">
          <SearchField />

          { deviceWidth < 750 &&
          
          <CustomButton btnStyle="text-white ml-2" BtnIcon={<FaRegBell />} />  
          }
          
        </div>

        <div
          id="nav-buttons"
          className="hidden md:flex md:col-span-4 xl:col-span-3 justify-around items-center"
        >
          { navButtons }

        </div>

        <div className="xl:hidden col-span-1 md:col-span-1 text-right flex items-center justify-end">
          <CustomButton
            handleClick={menuOpener}
            btnStyle={ isOpen ? 'duration-500 rotate-90 text-white' : 'text-white' }
            BtnIcon={isOpen ? <IoMdClose/> : <FiMenu />}
          />
        </div>
      </div>

      {/* For mobile */}

      { isOpen && deviceWidth < 780 && (
        <div className="flex flex-col justify-evenly items-center absolute h-screen py-5 rounded-2xl right-6 top-16 left-6 z-20 sideBgColor">
          
          { navLinks }

          { navButtons } 

        </div>
      )}

      {/* For tablet */}

      {isOpen && deviceWidth >= 780 && deviceWidth <= 1280 && (
        <div className="flex flex-col justify-evenly items-center absolute h-96 py-5 rounded-2xl right-6 top-24 left-1/2 z-20 sideBgColor"
        >
          {navLinks}
        </div>

      )}

      {/* side bar */}
      {
        pathname !== '/movie' && pathname !== '/tv_show' && pathname !== '/new' &&
        <div className="sideBgColor top-24 -left-8  absolute lg:top-36 w-20 lg:w-28 rounded-3xl z-50">
        <CustomButton
          btnStyle="text-lilac_tone float-right mr-3 lg:mr-[28px] my-2 lg:my-10"
          BtnIcon={<HiOutlineUsers />}
        />
        <CustomButton
          btnStyle="text-lilac_tone float-right mr-3 lg:mr-[28px] mb-2  lg:mb-10"
          BtnIcon={<AiOutlineBars />}
        />
        <CustomButton
          btnStyle="text-lilac_tone float-right mr-3 lg:mr-[28px] mb-2 lg:mb-10"
          BtnIcon={<FiDownload />}
        />
        <CustomButton
          btnStyle="text-lilac_tone float-right mr-3 lg:mr-[28px] mb-2 lg:mb-10"
          BtnIcon={<FiSettings />}
        />
      </div>
      }
      {/* side bar end */}
    </div>
  );
};

export default Navbar;
