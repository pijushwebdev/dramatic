import { TMovie } from "@/types";
import { fetchData } from "../apis/api";
import { MovieCard } from "../components";

const NewMovies = async () => {
  const data = await fetchData(`/movie/upcoming`);
  const movies = data?.results;

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-7 py-28 px-5 container mx-auto">
      {movies.map((movie: TMovie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default NewMovies;
