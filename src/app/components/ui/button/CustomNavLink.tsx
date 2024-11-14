
import Link from "next/link";
import { NavLinksProps } from "@/types";


const CustomNavLink = ({title, href, linkStyles, handleOpener }: NavLinksProps ) => {

    return (
        <>
            <Link onClick={handleOpener} href={href} className={`uppercase py-1 px-2 duration-500 hover:text-yellow_tone ${linkStyles}`}>
                {title}
            </Link>
        </>
    );
};

export default CustomNavLink;