import { TSimilarMovies } from "@/types";
import { SimilarCard } from "..";

const SimilarMovies = ({ movies }: { movies: TSimilarMovies[] }) => {
  return (
    <div className="flex gap-8 pb-7 scroll-p-0 scroll-m-0 scroll-smooth scrollbar-hide overflow-x-scroll overflow-y-hidden">
      {movies.map((movie: TSimilarMovies, index) => (
        <SimilarCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default SimilarMovies;
