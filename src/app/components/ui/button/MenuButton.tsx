'use client'
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";


const MenuButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenuOpener = () => {
        setIsOpen(!isOpen);
    }

    const className = isOpen ? 'h-8 w-8 text-3xl duration-500 hover:text-yellow_tone duration-500 rotate-90 text-white' : 'h-8 w-8 text-3xl duration-500 hover:text-yellow_tone'; 
    return (
        <>
            <button className={`h-8 w-8 text-3xl duration-500 hover:text-yellow_tone"`} onClick={handleMenuOpener}>{isOpen ? <IoMdClose/> : <FiMenu />}</button>
        </>
    );
};

export default MenuButton;