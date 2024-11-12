'use client'

import { MdOutlineFileDownload } from "react-icons/md";

const DownloadButton = () => {
    return (
        <div>
            <button className="text-xs hover:text-lilac_tone2 transition-all duration-200 lg:text-2xl rounded-full lg:font-semibold font-thin bg-[#5C5C5C] text-white p-1 lg:p-2"><MdOutlineFileDownload /></button>
        </div>
    );
};

export default DownloadButton;