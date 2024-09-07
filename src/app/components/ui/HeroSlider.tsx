import { TMovie } from "@/app/types";
import MyCarousel from "./MyCarousel";
import { IMAGE_URL } from "@/config";
import Image from "next/image";
import HeroDetails from "./HeroDetails";
import DetailsPoster from "../(myComponent)/DetailsPoster";


const HeroSlider = ({ movies }: { movies: TMovie[] }) => {

  
  return (
    <div className="max-h-[907px]">
      <MyCarousel >
        {movies.map((movie: TMovie) => (
          <DetailsPoster movie={movie} key={movie.id}/>
        ))}
      </MyCarousel>
    </div>
  );
};

export default HeroSlider;
