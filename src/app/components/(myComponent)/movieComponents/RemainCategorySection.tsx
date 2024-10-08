"use client";

import { ClientSideFetching } from "@/app/apis/clientSideApi";
import LoadingSkeleton from "../../ui/LoadingSkeleton";
import { TCategoryUrl } from "@/app/types";
import SubHeading from "../../ui/SubHeading";
import MovieCard from "./MovieCard";


const RemainCategorySection = ({ category }: { category: TCategoryUrl }) => {
  

  const { loading, data } = ClientSideFetching(category?.apiUrl);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <LoadingSkeleton />
      </div>
    );
  }

  if (!data) return <p>No data available</p>;

  return (
    <div className="pt-5 card-bg overflow-hidden">
      {/* Render the section title */}
      <SubHeading heading={category?.title} />

      {/* Movie list */}
      <div className="flex gap-8 pb-7 scroll-p-0 scroll-m-0 scroll-smooth scrollbar-hide overflow-x-scroll overflow-y-hidden">
        {data?.results?.map((movie: any, index: number) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default RemainCategorySection;
