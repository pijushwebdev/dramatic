import { TMovie } from "@/app/types";
import DetailsPoster from "../(myComponent)/movieComponents/DetailsPoster";
import MyCarousel from "./MyCarousel";




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
