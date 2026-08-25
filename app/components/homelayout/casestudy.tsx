"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight, Folder } from "lucide-react";
import { CaseStudyData, GlobalLawData } from "@/types/law";
import rawLawData from "@/app/data/lawData.json";

const defaultCaseStudyData: CaseStudyData = (rawLawData as GlobalLawData).caseStudy || {
    tagline: "CASE STUDY",
    heading: {
        line1: "Tailored For",
        highlight: "Legal",
        line2: "Practices In Injury Law And Traffic Defense",
    },
    subheading: "Explore how our strategic legal solutions have delivered real results and made a difference in our clients' lives.",
    items: [],
};

interface CaseStudyProps {
    data?: CaseStudyData;
}

export default function CaseStudy({ data = defaultCaseStudyData }: CaseStudyProps) {
    const { tagline, heading, subheading, items } = data;
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    // Get 3 visible items cyclically for smooth desktop carousel
    const visibleItems = items.length > 0
        ? Array.from({ length: Math.min(3, items.length) }, (_, i) => items[(currentIndex + i) % items.length])
        : [];

    return (
        <section className="relative w-full bg-[#0B151E] text-white py-10 sm:py-12 md:py-14 mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">

                    {/* Header Left: Tagline, Title & Subheading */}
                    <div className="max-w-3xl">
                        {/* Tag Badge */}
                        <div className="flex items-center gap-2 mb-3">
                            <Folder className="w-4 h-4 text-[#D4A359]" />
                            <span className="text-[#D4A359] text-xs md:text-sm font-semibold tracking-widest uppercase">
                                {tagline}
                            </span>
                            <span className="w-12 h-[1px] bg-[#D4A359]/60 ml-1" />
                        </div>

                        {/* Main Heading */}
                        <h2 className=" font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] tracking-tight text-white mb-4">
                            <span className="font-medium">{heading.line1}</span>{" "}
                            <span className="text-[#D4A359] italic font-serif">{heading.highlight}</span>{" "}
                            <span className="font-medium">{heading.line2}</span>
                        </h2>

                        {/* Subheading */}
                        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                            {subheading}
                        </p>
                    </div>

                    {/* Navigation Controls (Top Right) */}
                    <div className="flex items-center gap-3 self-end lg:self-auto mb-1">
                        <button
                            onClick={prevSlide}
                            aria-label="Previous Case Study"
                            className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-[#D4A359] hover:text-[#0B0E14] hover:border-[#D4A359] flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            aria-label="Next Case Study"
                            className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-[#D4A359] hover:text-[#0B0E14] hover:border-[#D4A359] flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Case Study Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {visibleItems.map((item) => (
                        <div key={item.id} className="flex flex-col group">

                            {/* Image Card Container with Floating Button */}
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/40 via-transparent to-transparent opacity-60" />

                                {/* Floating Arrow Badge (Dark Maroon/Brown Button) */}
                                <Link
                                    href={item.linkHref}
                                    className="absolute bottom-3.5 right-3.5 w-11 h-11 rounded-xl bg-[#422222]/90 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#D4A359] group-hover:text-[#0B0E14]"
                                >
                                    <ArrowUpRight className="w-5 h-5 stroke-[2]" />
                                </Link>
                            </div>

                            {/* Below Image Content Alignment */}
                            <div className="flex items-stretch gap-4 sm:gap-5">
                                {/* Outlined Number */}
                                <span
                                    className="text-5xl sm:text-6xl lg:text-[64px] font-normal text-transparent leading-none select-none shrink-0 pt-1 tracking-tighter"
                                    style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.45)" }}
                                >
                                    {item.number}
                                </span>

                                {/* Continuous Vertical Gold Line */}
                                <div className="w-[1.5px] bg-[#D4A359]/70 shrink-0 self-stretch my-1" />

                                {/* Right Stacked Content: Title, Description, Link */}
                                <div className="flex flex-col flex-1 pl-1">
                                    <h3 className="font-serif text-lg sm:text-xl font-medium text-white leading-snug mb-3 group-hover:text-[#E3C280] transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
                                        {item.description}
                                    </p>

                                    <div className="mt-auto pt-1">
                                        <Link
                                            href={item.linkHref}
                                            className="inline-flex items-center gap-2 text-[#D4A359] text-xs sm:text-sm font-medium hover:text-[#E3C280] transition-colors group/link"
                                        >
                                            <span>{item.linkText}</span>
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Pagination Dots */}
                <div className="flex items-center justify-center gap-2.5 mt-10">
                    {items.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`transition-all duration-300 rounded-full ${idx === currentIndex
                                    ? "w-3 h-3 bg-[#D4A359] shadow-[0_0_8px_rgba(212,163,89,0.6)]"
                                    : "w-2.5 h-2.5 border border-gray-600 bg-transparent hover:border-gray-400"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
