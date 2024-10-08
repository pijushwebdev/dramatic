import { TSimilarMovies } from "@/app/types";
import { IMAGE_URL } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";


const SimilarCard = ({movie}: {movie: TSimilarMovies}) => {
    return (
        <div>
            <div
          key={movie?.id}
          className="w-full h-full text-white overflow-hidden rounded-md"
        >
          <div className="group overflow-hidden relative w-64 h-32">
            <Link
              className="absolute rounded-md z-20 transition-all w-full h-full duration-300 opacity-0 ease-in-out bg-black text-lilac_tone2 group-hover:opacity-75 flex justify-center items-center text-3xl "
              href={`http://localhost:3000/movie/${encodeURIComponent(
                movie?.id
              )}`}
            >
              <FaLink />
            </Link>
            <Image
              className="w-64 h-32 rounded-md duration-300 transition-all group-hover:scale-125 relative z-10"
              title={movie?.title}
              src={
                movie?.poster_path
                  ? `${IMAGE_URL}${movie?.poster_path}`
                  : `https://i.ibb.co.com/xfMYmmq/unavailable.jpg`
              }
              width={168}
              height={287}
              alt={movie?.title}
              
            />
          </div>
        </div>
        </div>
    );
};

export default SimilarCard;