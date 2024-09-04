import Link from "next/link";
import { NavLinksProps } from "@/app/types";


const CustomNavLink = ({title, href, linkStyles }: NavLinksProps ) => {

    return (
        <div>
            <Link href={href} className={`uppercase py-1 px-2 duration-500 hover:text-yellow_tone ${linkStyles}`}>
                {title}
            </Link>
        </div>
    );
};

export default CustomNavLink;