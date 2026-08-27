"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, ArrowRight, Landmark } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative w-full min-h-[calc(100vh-130px)] bg-[#070A11] text-white flex flex-col items-center justify-center overflow-hidden select-none py-6">
      
      {/* Background Subtle Radial Gradient & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111A2E]/50 via-[#070A11] to-[#070A11] pointer-events-none z-0" />

      {/* Left Side: Lady Justice Artwork / Statue Overlay */}
      <div className="absolute left-0 bottom-0 top-0 w-1/3 max-w-[450px] hidden lg:block pointer-events-none z-10 opacity-70">
        <div className="relative w-full h-full">
          <Image
            src="/about.svg"
            alt="Lady Justice"
            fill
            className="object-cover object-left opacity-25 mix-blend-luminosity filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#070A11]/80 to-[#070A11]" />
        </div>
      </div>

      {/* Right Side: Law Courthouse Columns Overlay */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 max-w-[450px] hidden lg:block pointer-events-none z-10 opacity-70">
        <div className="relative w-full h-full">
          <Image
            src="/footerimg.svg"
            alt="Courthouse Pillars"
            fill
            className="object-cover object-right opacity-25 mix-blend-luminosity filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#070A11]/80 to-[#070A11]" />
        </div>
      </div>
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-4 max-w-4xl mx-auto my-auto">
        
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-2"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#D4A359] rotate-45 shrink-0" />
            <span className="w-16 sm:w-28 md:w-36 h-[1px] bg-[#D4A359]/80" />
          </div>
          <svg
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#D4A359] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9.5L12 3.5L21 9.5" />
            <path d="M4 9.5H20" />
            <path d="M7 9.5V17.5" />
            <path d="M12 9.5V17.5" />
            <path d="M17 9.5V17.5" />
            <path d="M4 17.5H20" />
            <path d="M3 19.5H21" />
          </svg>

          <div className="flex items-center gap-2">
            <span className="w-16 sm:w-28 md:w-36 h-[1px] bg-[#D4A359]/80" />
            <span className="w-1.5 h-1.5 bg-[#D4A359] rotate-45 shrink-0" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[80px] sm:text-[110px] md:text-[140px] lg:text-[160px] font-semibold leading-none tracking-tight flex items-center justify-center gap-1 select-none"
        >
          <span className="text-white drop-shadow-[0_10px_25px_rgba(255,255,255,0.1)]">4</span>
          <span className="text-[#D4A359] drop-shadow-[0_10px_30px_rgba(212,163,89,0.35)]">0</span>
          <span className="text-white drop-shadow-[0_10px_25px_rgba(255,255,255,0.1)]">4</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 my-2 sm:my-3 w-full max-w-md"
        >
          <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#D4A359]/50 to-[#D4A359]" />
          <span className="text-[#D4A359] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
            PAGE NOT FOUND
          </span>
          <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#D4A359]/50 to-[#D4A359]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-300 text-xs sm:text-sm md:text-base max-w-md sm:max-w-lg mx-auto leading-relaxed mb-5 sm:mb-6 font-light"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2.5 bg-[#070A11]/90 border border-[#D4A359] text-white hover:text-[#D4A359] px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(212,163,89,0.15)] hover:shadow-[0_0_30px_rgba(212,163,89,0.35)] hover:bg-[#D4A359]/10 active:scale-95"
          >
            <Home className="w-4 h-4 text-[#D4A359] transition-transform duration-300 group-hover:scale-110" />
            <span className="tracking-wide">Back To Home</span>
            <ArrowRight className="w-4 h-4 text-[#D4A359] transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </motion.div>

      </div>

    </main>
  );
}
