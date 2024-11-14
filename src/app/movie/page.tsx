
"use client";

import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchData } from "../apis/api";
import { TMovie } from "../../types";
import { LoadingSkeleton, MovieCard } from "../components";

const AllMovies = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Fetch initial data and set movies
  useEffect(() => {
    const loadInitialMovies = async () => {
      const data = await fetchData(`/discover/movie?sort_by=popularity.desc&include_adult=false&page=1`);
      setMovies(data?.results);
    };
    loadInitialMovies();
  }, []);

  // Fetch next page when user scrolls to bottom
  const fetchMoreMovies = async () => {
    const nextPage = page + 1;
    const data = await fetchData(`/discover/movie?sort_by=popularity.desc&include_adult=false&page=${nextPage}`);
    
    if (data?.results && data?.results?.length > 0) {
      setMovies((prevMovies) => [...prevMovies, ...data?.results]);
      setPage(nextPage);
    } else {
      setHasMore(false); // No more data to fetch
    }
  };

  return (
    <InfiniteScroll
      dataLength={movies.length} // Current data length
      next={fetchMoreMovies}     // Function to fetch next page
      hasMore={hasMore}          // Boolean if there are more movies to load
      loader={<LoadingSkeleton/>}
      endMessage={<p>No more movies to show.</p>}
      className="grid gap-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-7 py-28 px-5"
    >
      {movies.map((movie: TMovie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </InfiniteScroll>
  );
};

export default AllMovies;



