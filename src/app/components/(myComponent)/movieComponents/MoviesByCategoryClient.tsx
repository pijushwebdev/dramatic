"use client";

import MovieCard from "./MovieCard";
import LoadingSkeleton from "../../ui/LoadingSkeleton";
import { ClientSideFetching } from "@/app/apis/clientSideApi";
import SubHeading from "../../ui/SubHeading";

const MoviesByCategoryClient = ({ category }: any) => {
  const { apiUrl, title } = category;

  const { loading, data } = ClientSideFetching(apiUrl);

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <LoadingSkeleton />
      </div>
    );

  if (!data) return <p>No data available</p>;

  return (
    <div className="pt-5 card-bg overflow-hidden">
      {/* <h1 className="text-white font-bold text-lg mb-5">{title}</h1> */}
      <SubHeading heading={title} />

      <div className="flex gap-8 pb-7 scroll-p-0 scroll-m-0 scroll-smooth scrollbar-hide overflow-x-scroll overflow-y-hidden">
        {data.results.map((movie: any, index: number) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesByCategoryClient;
