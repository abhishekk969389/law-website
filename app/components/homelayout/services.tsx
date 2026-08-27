"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Scale, Car, Shield, FileText, ArrowRight, LucideIcon } from "lucide-react";
import { ServicesData, GlobalLawData } from "@/types/law";
import rawLawData from "@/app/data/lawData.json";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultServicesData: ServicesData = (rawLawData as GlobalLawData).services;

interface ServicesProps {
  data?: ServicesData;
}

const serviceIconMap: Record<string, LucideIcon> = {
  handcuffs: Scale,
  car: Car,
  shield: Shield,
  filetext: FileText,
};

export default function Services({ data = defaultServicesData }: ServicesProps) {
  const { tagline, heading, subheading, items } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <FadeIn direction="up" delay={0.1} className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-9">

          {/* Top Tagline with Balance Scale icon */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 max-w-full overflow-hidden">
            <span className="w-6 sm:w-12 h-[1px] bg-[#D4A359]/60 shrink" />
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4A359]" />
              <span className="text-[#D4A359] text-[11px] sm:text-xs md:text-lg font-semibold tracking-wider sm:tracking-widest uppercase">
                {tagline}
              </span>
            </div>
            <span className="w-6 sm:w-12 h-[1px] bg-[#D4A359]/60 shrink" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-2xl sm:text-2xl md:text-5xl lg:text-[56px] leading-[1.2] tracking-tight mb-4">
            <span className="block text-white font-medium">{heading.line1}</span>
            <span className="block text-white font-medium">
              {heading.line2}{" "}
              <span className="text-[#D4A359] italic font-serif">{heading.highlight}</span>
            </span>
          </h2>

          {/* Subheading Description */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-[620px] mx-auto">
            {subheading}
          </p>

        </FadeIn>

        {/* Cards Carousel Container with Arrows inside max-w-[1400px] */}
        <div className="relative flex items-center w-full">

          {/* Left Arrow Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="hidden lg:flex absolute left-0 z-20 w-11 h-11 rounded-full bg-[#121722] border border-slate-800 text-slate-300 hover:text-white hover:border-[#D4A359] items-center justify-center transition-all duration-200 shadow-xl cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-[#D4A359]" />
          </motion.button>

          {/* 4 Cards Grid with padding for side arrows */}
          <StaggerContainer staggerChildren={0.12} delayChildren={0.2} className="w-full lg:px-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4.5">
            {items.map((item, index) => {
              const IconComp = serviceIconMap[item.icon.toLowerCase()] || Scale;

              return (
                <StaggerItem key={item.id || index}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    className="bg-[#090C12] border border-slate-800/60 rounded-[18px] p-3 pt-3 pb-6 flex flex-col items-center text-center relative group hover:border-[#D4A359]/40 transition-all duration-300 shadow-xl h-full cursor-pointer"
                  >
                    {/* Top Image Container */}
                    <div className="relative rounded-[14px] overflow-hidden w-full h-[175px] sm:h-[190px] bg-[#090C12]">
                      <Image
                        src={item.image || "/service-1.svg"}
                        alt={item.title}
                        fill
                        className="object-cover scale-[1.22] sm:scale-[1.20] transition-transform duration-700 group-hover:scale-135"
                      />
                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090C12]/80 via-transparent to-transparent opacity-50" />
                    </div>

                    {/* Overlapping Circular Icon Badge */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0C1217] border border-[#D4A359]/35 flex items-center justify-center text-[#D4A359] -mt-7 mb-3.5 z-10 shadow-2xl group-hover:border-[#D4A359]/70 transition-all"
                    >
                      <IconComp className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4A359]" />
                    </motion.div>

                    {/* Card Title */}
                    <Link href={item.linkHref || `/service/${item.id || index + 1}`}>
                      <h3 className="text-white font-serif font-medium text-lg sm:text-xl mb-2 tracking-tight group-hover:text-[#D4A359] transition-colors cursor-pointer">
                        {item.title}
                      </h3>
                    </Link>

                    {/* Small Golden Underline */}
                    <div className="w-9 h-[2px] bg-[#D4A359]/80 mb-3" />

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-[220px] mb-6 flex-grow">
                      {item.description}
                    </p>

                    {/* Learn More Action Button */}
                    <Link
                      href={item.linkHref || `/service/${item.id || index + 1}`}
                      className="inline-flex items-center gap-2 text-[#D4A359] hover:text-[#E3C280] font-medium text-xs sm:text-sm tracking-wide transition-all group-hover:gap-3 mt-auto"
                    >
                      <span>{item.linkText || "Learn More"}</span>
                      <ArrowRight className="w-4 h-4 text-[#D4A359]" />
                    </Link>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Right Arrow Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            aria-label="Next Slide"
            className="hidden lg:flex absolute right-0 z-20 w-11 h-11 rounded-full bg-[#121722] border border-slate-800 text-slate-300 hover:text-white hover:border-[#D4A359] items-center justify-center transition-all duration-200 shadow-xl cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-[#D4A359]" />
          </motion.button>

        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${idx === currentIndex
                  ? "w-3 h-3 bg-[#D4A359]"
                  : "w-3 h-3 border-2 border-slate-600/90 bg-transparent hover:border-[#D4A359]"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
