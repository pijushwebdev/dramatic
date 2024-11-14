import { TMovie } from "@/types";
import MyCarousel from "./MyCarousel";
import { DetailsPoster } from "..";

const HeroSlider = ({ movies }: { movies: TMovie[] }) => {
  return (
    <div className="max-h-[907px]">
      <MyCarousel>
        {movies.map((movie: TMovie) => (
          <DetailsPoster movie={movie} key={movie.id} />
        ))}
      </MyCarousel>
    </div>
  );
};

export default HeroSlider;
