"use client";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { TMovieApiResponse } from "../../types";


const MoviesByCategoryClient = ({ category }: any) => {
  const { apiUrl, title } = category;
  const [data, setData] = useState<TMovieApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataClient = async () => {
      try {
        // Base URL
        const BASE_URL = "https://api.themoviedb.org/3";
        const headers = {
          "Content-Type": "application/json",
        };

        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        if(!apiKey){
          throw new Error('Client Api key not found')
        }

        // Fetch data from the API
        const { data } = await axios.get<TMovieApiResponse>(BASE_URL + apiUrl, {
          headers,
          params: {
            api_key: apiKey,
          },
        });

        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from client:", error);
        setLoading(false);
      }
    };

    fetchDataClient();
  }, [apiUrl]);



  if (loading) return <p className="text-white text-3xl text-center">Loading...</p>;

  if (!data) return <p>No data available</p>;

  return (
    <div className="pt-5 movie-card-bg overflow-hidden">
      <h1 className="text-white font-bold text-lg mb-5">{title}</h1>

      <div className="flex gap-8 pb-7 scroll-p-0 scroll-m-0 scroll-smooth scrollbar-hide overflow-x-scroll overflow-y-hidden">
        {
        data.results.map((movie: any, index: number) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesByCategoryClient;
