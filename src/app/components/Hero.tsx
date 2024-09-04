import { fetchData } from "../apis/api";
import { montserrat } from "../fonts/fonts";
import HeroSlider from "./ui/HeroSlider";

const Hero = async () => {

    const data = await fetchData('/movie/top_rated');

    const movies = data.results;
  return (
    <>
      <div className={`${montserrat.className}`}>
          <HeroSlider movies={movies}/>
      </div>
    </>
  );
};

export default Hero;
