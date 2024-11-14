'use client'

import { TTvShow, TTvShowApiResponse } from '@/types';
import { useState, useEffect } from 'react';
import { fetchData } from '../apis/api';
import { MovieCard } from '../components';

const TvShow = () => {
  const [tvShows, setTVShows] = useState<TTvShow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pagesToShow = 4; // Number of pages to display before the ellipsis

  useEffect(() => {
    const loadTVShows = async () => {
      const data: TTvShowApiResponse = await fetchData(`/discover/tv?page=${currentPage}`);
      setTVShows(data?.results);
      setTotalPages(data?.total_pages);
    };

    loadTVShows();
  }, [currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPagination = () => {
    const pageNumbers = [];

    // Calculate the range of pages to show around the current page
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    // Adjust start page if we're near the end
    const adjustedStartPage = Math.max(1, Math.min(startPage, totalPages - pagesToShow + 1));

    // Display pages within the calculated range
    for (let i = adjustedStartPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-3 py-1 ${i === currentPage ? 'bg-lilac_tone2 text-white' : 'bg-gray-300'}`}
        >
          {i}
        </button>
      );
    }

    // Display ellipsis if there are more pages at the end
    if (endPage < totalPages) {
      pageNumbers.push(
        <span key="ellipsis" className="px-3 py-1 text-offWhite">
          ...
        </span>
      );

      // Display last page
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => goToPage(totalPages)}
          className={`p-1 md:px-2 md:py-1 rounded ${totalPages === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };
  //end renderPagination 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">TV Shows</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-7 py-8 px-5">
        {tvShows.map(show => (
          <MovieCard key={show?.id} movie={show} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8 space-x-2">
        {/* Previous Button */}
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`p-1 md:px-3 md:py-2 rounded ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400'}`}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {renderPagination()}

        {/* Next Button */}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`p-1 md:px-3 md:py-2 rounded ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TvShow;
