import Link from "next/link";
import { NavLinksProps } from "../../types";


const CustomNavLink = ({title, href, linkStyles }: NavLinksProps ) => {
    return (
        <div>
            <Link href={href} className={`uppercase py-1 px-2 hover:text-[#FFC907] ${linkStyles}`}>
                {title}
            </Link>
        </div>
    );
};

export default CustomNavLink;