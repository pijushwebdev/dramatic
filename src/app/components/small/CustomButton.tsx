import React from 'react';
import { NavButtonProps } from "../../types";


const CustomButton = ({BtnIcon, btnStyle, btnStyle2, profileImg, handleClick}: NavButtonProps) => {

    const className = profileImg ? btnStyle2 : `${btnStyle} h-8 w-8 text-3xl hover:text-[#FFC907]`;

    return (
        <>
         <button onClick={handleClick} className={className}> {BtnIcon} </button>   
        </>
    );
};

export default CustomButton;