
import { fetchData } from "../../apis/api";
import MovieCard from "./MovieCard";

const MoviesByCategory = async ({ category }: any) => {
  
  const { title, apiUrl } = category;

  const moviesData = await fetchData(apiUrl);
  const movies = moviesData.results;

  return (
    <div className="lg:ml-24 ml-0">
      <h1 className="text-white font-bold text-lg my-5">{title}</h1>

      <div className="flex gap-8 pb-7 scroll-p-0 scroll-m-0 scroll-smooth scrollbar-hide overflow-x-scroll overflow-y-hidden">
        {movies.map((movie: any, index: number) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesByCategory;
