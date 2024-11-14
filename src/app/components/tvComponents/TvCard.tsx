import { IMAGE_URL } from "@/config";
import moment from "moment";
import Image from "next/image";
import { FaLink, FaRegEye } from "react-icons/fa";
import Link from "next/link";
import { BookmarkButton } from "..";

const TvCard = ({ tv }: any) => {
  if(!tv) return
  const {
    id,
    vote_average,
    title,
    name,
    release_date,
    first_air_date,
    poster_path,
  } = tv;

  if(tv?.media_type === 'person') return;

  const releaseYear = moment(release_date, "YYYY-MM-DD").year();
  const firstAirDate = moment(first_air_date, "YYYY-MM-DD").year();


  return (
    <div className="w-full h-full">
      <div className="w-full text-white overflow-hidden rounded-md">
        <div className="group overflow-hidden relative">
          <Link
            className="absolute rounded-md z-20 transition-all w-full h-full duration-300 opacity-0 ease-in-out bg-black text-lilac_tone2 group-hover:opacity-75 flex justify-center items-center text-3xl "
            href={`http://localhost:3000/${tv?.media_type ? tv?.media_type : 'tv'}/${encodeURIComponent(id)}`}
          >
            <FaLink />
          </Link>
          <Image
            className="w-full h-[237px] rounded-md duration-300 transition-all group-hover:scale-125 relative z-10"
            title={title ? title : name ? name : 'Title'}
            src={poster_path ?`${IMAGE_URL}${poster_path}` : 'https://i.ibb.co.com/RzDgYSW/10125137-17973836-1.jpg'}
            width={168}
            height={237}
            alt={title}
            
          />
        </div>
      </div>

      <div>
        <h4
          title={title ? title : name ? name : 'Title'}
          className="w-40 mt-2 text-base font-bold text-white truncate"
        >
          {title ? title : name ? name : 'No Title'}
        </h4>
        <p className="lg:font-bold font-bold text-xs text-grey_tone2 inline rounded-md px-0 md:px-1">
          {releaseYear ? releaseYear : firstAirDate}
        </p>

        <div className="flex justify-between">
          <div className="w-7 h-3 flex items-center">
            <Image
              className="w-full h-full"
              width={28}
              height={14}
              src="https://i.ibb.co/0DBNqkP/e4a5b6be082941049058f053ee30d6a3.png"
              alt="imdb"
              loading="eager"
            />
            <p className="text-yellow_tone font-bold text-xs px-0 md:px-1">
              {vote_average ? vote_average.toFixed(1) : '0.0' }
            </p>
          </div>

          <div className="flex gap-2">
            <span className="text-white">
              <FaRegEye />
            </span>
            <BookmarkButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvCard;
