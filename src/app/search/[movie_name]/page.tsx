import { fetchData } from "@/app/apis/api";
import MovieCard from "@/app/components/(myComponent)/movieComponents/MovieCard";
import React from "react";


const page = async ({params} : {params: {movie_name: string}}) => {


    const data = await fetchData(`/search/multi?query=${params?.movie_name}&include_adult=false`);
    const movies = data?.results;

    return (
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 p-5 pt-28 max-w-[1440px] mx-auto ">
      { movies &&
        movies?.map((movie: any) => (
            <MovieCard key={movie?.id} movie={movie} />
        ))
      }
      </div>
  );
};

export default page;
