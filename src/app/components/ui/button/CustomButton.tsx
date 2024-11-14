'use client'
import { NavButtonProps } from '@/types'; 


const CustomButton = ({BtnIcon, btnStyle, profileImg, handleClick}: NavButtonProps) => {

    const btnStyle2 = ' w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden flex border-2 border-white justify-center items-center'

    const className = profileImg ? btnStyle2 : `${btnStyle} h-8 w-8 md:text-2xl lg:text-3xl duration-500 hover:text-yellow_tone`;

    
    return (
        <>
         <button onClick={handleClick} className={className}> {BtnIcon} </button>   
        </>
    );
};

export default CustomButton;