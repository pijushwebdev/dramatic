"use client";

import { Griffy } from "next/font/google";
import { CustomNavLink, CustomButton, SearchField } from ".";
import { FiGift, FiMenu, FiDownload, FiSettings } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import Image from "next/image";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineBars } from "react-icons/ai";
import { IoMdClose } from 'react-icons/io'
import React, { useState } from "react";
import useDeviceWidth from "../hooks/useDeviceWidth";

const griffy = Griffy({
  subsets: ["latin"],
  display: "fallback",
  weight: "400",
});

const Navbar = () => {

  const deviceWidth = useDeviceWidth();
  const [isOpen, setIsOpen] = useState(false);

  const menuOpener = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = <>
          <CustomNavLink linkStyles="text-[#A1B1CB] font-bold" href={"/"} title="Home" />
          <CustomNavLink linkStyles="text-[#A1B1CB] font-bold" href={"/"} title="Tv Show" />
          <CustomNavLink linkStyles="text-[#A1B1CB] font-bold" href={"/"} title="Movies" />
          <CustomNavLink linkStyles="text-[#A1B1CB] font-bold" href={"/"} title="New" />      
  </>

const navButtons = <>
  <CustomButton btnStyle="text-white" BtnIcon={<FiGift />} />
  <CustomButton btnStyle="text-white" BtnIcon={<FaRegBell />} />
  <CustomButton
    profileImg={true}
    btnStyle2="w-14 h-14 rounded-full overflow-hidden flex border-2 border-white justify-center items-center"
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
    <>
      <div
        id="nav-container"
        className="navBgColor max-w-[1440px] mx-auto px-5 relative lg:h-24 grid grid-cols-12 py-2 md:py-4 lg:py-0 place-content-center"
      >
        <div className="flex items-center col-span-5 md:col-span-3 xl:col-span-2">
          <CustomNavLink
            href={"/"}
            title={"Dramatic"}
            linkStyles={`text-2xl md:text-3xl lg:text-4xl text-[#FFC907] ${griffy.className}`}
          />
        </div>

        <div
          id="nav-links"
          className={`hidden xl:flex items-center justify-around xl:col-span-4`}
        >
          { navLinks }

        </div>

        <div className="flex items-center col-span-5 md:col-span-4 xl:col-span-3">
          <SearchField />
        </div>

        <div
          id="nav-buttons"
          className="hidden md:flex md:col-span-4 xl:col-span-3 justify-evenly items-center"
        >
          { navButtons }

        </div>

        <div className="xl:hidden col-span-2 md:col-span-1 text-right flex items-center justify-end">
          <CustomButton
            handleClick={menuOpener}
            btnStyle={ isOpen ? 'duration-500 rotate-90 text-white' : 'text-white' }
            BtnIcon={isOpen ? <IoMdClose/> : <FiMenu />}
          />
        </div>
      </div>

      {/* For mobile */}

      {isOpen && deviceWidth < 780 && (
        <div className="flex flex-col justify-between items-center absolute h-3/4 py-5 rounded-2xl right-6 top-24 left-6 z-20 sideBgColor">
          
          { navLinks }

          { navButtons } 

        </div>
      )}

      {/* For tablet */}

      {isOpen && deviceWidth >= 780 && deviceWidth <= 1280 && (
        <div className="flex flex-col justify-between items-center absolute h-1/2 py-5 rounded-2xl right-6 top-24 left-1/2 z-20 sideBgColor"
        >
          {navLinks}
        </div>

      )}

      <div className="sideBgColor absolute top-36 -left-8 w-28 rounded-3xl z-50">
        <CustomButton
          btnStyle="text-[#BCA5FF] float-right mr-[28px] my-10"
          BtnIcon={<HiOutlineUsers />}
        />
        <CustomButton
          btnStyle="text-[#BCA5FF] float-right mr-[28px]  mb-10"
          BtnIcon={<AiOutlineBars />}
        />
        <CustomButton
          btnStyle="text-[#BCA5FF] float-right mr-[28px]  mb-10"
          BtnIcon={<FiDownload />}
        />
        <CustomButton
          btnStyle="text-[#BCA5FF] float-right mr-[28px]  mb-10"
          BtnIcon={<FiSettings />}
        />
      </div>
    </>
  );
};

export default Navbar;
