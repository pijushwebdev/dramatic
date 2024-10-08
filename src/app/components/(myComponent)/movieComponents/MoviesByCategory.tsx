import { fetchData } from "@/app/apis/api";
import MovieCard from "./MovieCard";
import SubHeading from "../../ui/SubHeading";



const MoviesByCategory = async ({ category }: any) => {
  
  const { title, apiUrl } = category;

  const moviesData = await fetchData(apiUrl);
  const movies = moviesData.results;

  return (
    <div className="pt-5 card-bg overflow-hidden">
      {/* <h1 className="text-white font-bold text-lg mb-5">{title}</h1> */}
      <SubHeading heading={title} />

      <div className="flex gap-8 pb-7 scroll-p-0 scroll-m-0 scroll-smooth scrollbar-hide overflow-x-scroll overflow-y-hidden">
        {movies.map((movie: any, index: number) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesByCategory;
