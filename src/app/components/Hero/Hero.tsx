import { HiOutlineUsers } from "react-icons/hi";
import { fetchData } from "../../apis/api";
import { montserrat } from "../../fonts/fonts";
import CustomButton from "../ui/button/CustomButton";
import HeroSlider from "./HeroSlider";
import { AiOutlineBars } from "react-icons/ai";
import { FiDownload, FiSettings } from "react-icons/fi";

const Hero = async () => {
  const data = await fetchData("/movie/top_rated");

  const movies = data.results;

  
  return (
    <>
      <div className={`${montserrat.className}`}>
        <HeroSlider movies={movies} />
      </div>
    </>
  );
};

export default Hero;
