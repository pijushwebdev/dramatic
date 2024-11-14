'use client'
import { useEffect, useState } from "react";
import { TMovieApiResponse } from "../../types";
import axios from "axios";

export const ClientSideFetching = (apiUrl: string) => {
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

  return {loading, data}
}