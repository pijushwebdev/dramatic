'use client'
import { NavButtonProps } from '@/app/types'; 


const CustomButton = ({BtnIcon, btnStyle, profileImg, handleClick}: NavButtonProps) => {

    const btnStyle2 = 'w-12 h-12 rounded-full overflow-hidden flex border-2 border-white justify-center items-center'

    const className = profileImg ? btnStyle2 : `${btnStyle} h-8 w-8 text-3xl duration-500 hover:text-yellow_tone`;

    
    return (
        <>
         <button onClick={handleClick} className={className}> {BtnIcon} </button>   
        </>
    );
};

export default CustomButton;