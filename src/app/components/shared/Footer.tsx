import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { LanguageSelector } from "..";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-grey_tone3">
      <div className=" pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 pt-10 px-10 lg:px-0 max-w-[1440px] mx-auto">
        <div className="flex lg:justify-center justify-start mb-3 lg:mb-0">
          <LanguageSelector />
        </div>
        {/* 2 */}
        <div>
          <div>
            <h1 className="uppercase mb-4 font-bold text-base text-white">
              Navigation
            </h1>
          </div>
          <div className="flex flex-col space-y-3 mb-3 lg:mb-0">
            <Link href={`/`} className="text-xs font-normal text-white">
              Home
            </Link>
            <Link href={`/`} className="text-xs font-normal text-white">
              FAQ
            </Link>
            <Link href={`/`} className="text-xs font-normal text-white">
              Investor Relations
            </Link>
            <Link href={`/`} className="text-xs font-normal text-white">
              Jobs
            </Link>
            <Link href={`/`} className="text-xs font-normal text-white">
              About Us
            </Link>
            <Link href={`/`} className="text-xs font-normal text-white">
              Help Centre
            </Link>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div>
            <h1 className="uppercase mb-4 font-bold text-base text-white">
              LEGAL
            </h1>
          </div>
          <div className="flex flex-col space-y-3 mb-3 lg:mb-0">
            <Link href={`/`} className="text-xs font-normal text-white">
              Privacy Policy
            </Link>
            <Link href={`/`} className="text-xs font-normal text-white">
              Terms of Service
            </Link>
            <Link href={`/`} className="text-xs font-normal text-white">
              Cookie Preferences
            </Link>
            <Link href={`/`} className="text-xs font-normal text-white">
              Corporate Information
            </Link>
          </div>
        </div>
        {/* 4 */}
        <div>
          <div>
            <h1 className="uppercase mb-4 font-bold text-base text-white">
              TALK TO US
            </h1>
          </div>

          <div className="flex flex-col space-y-3 mb-3 lg:mb-0">
            <Link href={`/`} className="text-xs font-normal text-white">
              support@ercom.com
            </Link>
            <Link href={`/`} className="text-xs font-normal text-white">
              +66 2399 1145
            </Link>
          </div>
        </div>
        {/* 5 */}
        <div>
          <div>
            <h1 className="uppercase mb-4 font-bold text-base text-white">
              Follow us
            </h1>
          </div>

          <div className="flex gap-2">
            <Link className="p-2 rounded-full border border-white" href={``}>
              <FaFacebookF className="text-white text-xs" />
            </Link>
            <Link className="p-2 rounded-full border border-white" href={``}>
              <FaLinkedinIn className="text-white text-xs" />
            </Link>
            <Link className="p-2 rounded-full border border-white" href={``}>
              <FaTwitter className="text-white text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
