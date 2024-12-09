"use client"
import React, { useState } from "react";

interface PaginationProps {
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    if (onPageChange) onPageChange(page); // Optional callback
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      if (onPageChange) onPageChange(currentPage + 1);
    }
  };


  // Generate page numbers manually using a for loop to avoid ArrayIterator issues
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center space-x-5 mt-4">
      {/* Previous Button */}
    
      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-4 py-2 rounded-md ${
            currentPage === page
              ? "bg-yellow-600 text-white"
              : "bg-[#FFF3E3] text-[#000000] "
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400"
            : "bg-[#FFF3E3] text-[#000000] "
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
