import { TCastMember } from "@/app/types";
import { IMAGE_URL } from "@/config";
import Image from "next/image";

const CastCard = ({ cast }: { cast: TCastMember }) => {
  return (
    <div className="mt-5">
      <Image
        className="rounded-md p-0 m-0 h-full object-cover border border-slate-500"
        src={
          cast?.profile_path
            ? `${IMAGE_URL}${cast?.profile_path}`
            : `https://i.ibb.co.com/xfMYmmq/unavailable.jpg`
        }
        alt="cast"
        width={100}
        height={80}
        
      />

      <p className="text-white truncate w-32">{cast?.original_name}</p>
    </div>
  );
};

export default CastCard;
