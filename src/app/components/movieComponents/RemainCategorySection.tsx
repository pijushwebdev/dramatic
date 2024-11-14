"use client";


import { TCategoryUrl, TMovieApiResponse } from "@/types";
import { MovieCard, LoadingSkeleton, SubHeading } from "..";
import { fetchData } from "@/app/apis/api";
import { useEffect, useState } from "react";

const RemainCategorySection = ({ category }: { category: TCategoryUrl }) => {

  const [data, setData] = useState<TMovieApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

 

  useEffect(()=> {
    const fetchRemainingData = async () => {
      const res = await fetchData(category?.apiUrl);
      setData(res)
      setLoading(false)
    }

    fetchRemainingData();
  }, [category.apiUrl])

  console.log(data);

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
