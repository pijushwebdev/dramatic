import { fetchData } from "@/app/apis/api";
import {ResultNotFound, MovieCard} from "../../components";


const page = async ({params} : {params: {name: string}}) => {


    const data = await fetchData(`/search/multi?query=${params?.name}&include_adult=false`);
    const movies = data?.results;

    return (
      <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 p-5 pt-28 max-w-[1440px] mx-auto ">
      { movies.length > 0 &&
        movies?.map((movie: any) => (
            <MovieCard key={movie?.id} movie={movie} />
        )) 
      }
      </div>

      <div>
        {movies.length === 0 && <ResultNotFound />}
      </div>
      
      </>

  );
};

export default page;
