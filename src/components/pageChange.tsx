"use client"
import React from "react";

import Pagination from "./Pagination";

const PageChange = () => {
  const handlePageChange = (page: number) => {
    console.log("Current Page:", page);
  };

  return (
    <div className="max-w-4xl mx-auto mb-10 mt-10">
      <Pagination totalPages={3} onPageChange={handlePageChange} />
    </div>
  );
};

export default PageChange;
