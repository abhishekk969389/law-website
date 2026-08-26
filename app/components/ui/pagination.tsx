"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({
  currentPage = 1,
  totalPages = 8,
  onPageChange,
}: PaginationProps) {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
      if (onPageChange) onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-10 sm:mt-12 lg:mt-14 select-none">
      {/* Previous Arrow Button */}
      <button
        onClick={() => handlePageClick(activePage - 1)}
        disabled={activePage === 1}
        aria-label="Previous Page"
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center transition-all duration-300 ${
          activePage === 1
            ? "border-slate-800/60 bg-[#0A0E17]/60 text-slate-600 cursor-not-allowed"
            : "border-slate-800 bg-[#0A0E17] text-slate-300 hover:border-[#D4A359] hover:text-[#D4A359]"
        }`}
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-[#D4A359]" />
      </button>

      {/* Page 1 */}
      <button
        onClick={() => handlePageClick(1)}
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
          activePage === 1
            ? "border-[#D4A359] bg-[#0A0E17] text-[#D4A359] shadow-[0_0_12px_rgba(212,163,89,0.25)]"
            : "border-slate-800 bg-[#0A0E17] text-slate-300 hover:border-[#D4A359]/60 hover:text-[#D4A359]"
        }`}
      >
        1
      </button>

      {/* Page 2 */}
      <button
        onClick={() => handlePageClick(2)}
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
          activePage === 2
            ? "border-[#D4A359] bg-[#0A0E17] text-[#D4A359] shadow-[0_0_12px_rgba(212,163,89,0.25)]"
            : "border-slate-800 bg-[#0A0E17] text-slate-300 hover:border-[#D4A359]/60 hover:text-[#D4A359]"
        }`}
      >
        2
      </button>

      {/* Page 3 */}
      <button
        onClick={() => handlePageClick(3)}
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
          activePage === 3
            ? "border-[#D4A359] bg-[#0A0E17] text-[#D4A359] shadow-[0_0_12px_rgba(212,163,89,0.25)]"
            : "border-slate-800 bg-[#0A0E17] text-slate-300 hover:border-[#D4A359]/60 hover:text-[#D4A359]"
        }`}
      >
        3
      </button>

      {/* Ellipsis */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-slate-800/60 bg-[#0A0E17]/60 flex items-center justify-center text-slate-400 text-sm font-semibold select-none">
        ...
      </div>

      {/* Last Page (8) */}
      <button
        onClick={() => handlePageClick(totalPages)}
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
          activePage === totalPages
            ? "border-[#D4A359] bg-[#0A0E17] text-[#D4A359] shadow-[0_0_12px_rgba(212,163,89,0.25)]"
            : "border-slate-800 bg-[#0A0E17] text-slate-300 hover:border-[#D4A359]/60 hover:text-[#D4A359]"
        }`}
      >
        {totalPages}
      </button>

      {/* Next Arrow Button */}
      <button
        onClick={() => handlePageClick(activePage + 1)}
        disabled={activePage === totalPages}
        aria-label="Next Page"
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center transition-all duration-300 ${
          activePage === totalPages
            ? "border-slate-800/60 bg-[#0A0E17]/60 text-slate-600 cursor-not-allowed"
            : "border-slate-800 bg-[#0A0E17] text-[#D4A359] hover:border-[#D4A359] hover:bg-[#D4A359]/10"
        }`}
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A359]" />
      </button>
    </div>
  );
}

export default Pagination;
