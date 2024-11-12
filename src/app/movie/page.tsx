import { fetchData } from "../apis/api";
import MovieCard from "../components/(myComponent)/movieComponents/MovieCard";
import { TMovie } from "../types";


const AllMovies = async () => {

    const data = await fetchData(`/discover/movie?sort_by=popularity.desc`);

    const movies = data?.results;
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-7 py-28 px-5">
            {
                movies && movies.map((movie: TMovie) => (
                    <MovieCard key={movie?.id} movie={movie} />
                ))
            }
        </div>
    );
};

export default AllMovies;