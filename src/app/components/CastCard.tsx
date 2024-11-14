import { TCastMember } from "@/types";
import { IMAGE_URL } from "@/config";
import Image from "next/image";

const CastCard = ({ cast }: { cast: TCastMember }) => {
  return (
    <div className="mb-1">
      <div className="w-[110px] h-[145px]">
      <Image
        className="rounded-md p-0 m-0 h-full w-full object-cover border border-slate-500"
        src={
          cast?.profile_path
            ? `${IMAGE_URL}${cast?.profile_path}`
            : `https://i.ibb.co.com/xfMYmmq/unavailable.jpg`
        }
        alt="cast"
        width={110}
        height={145}
        
      />
      </div>

      <p className="text-white mt-2 font-bold truncate w-32">{cast?.original_name}</p>
      <p className="text-grey_tone2 font-bold truncate w-32">As {cast?.character}</p>
    </div>
  );
};

export default CastCard;
