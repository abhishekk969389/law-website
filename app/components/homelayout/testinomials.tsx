"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Scale } from "lucide-react";
import { TestimonialsData, GlobalLawData } from "@/types/law";
import rawLawData from "@/app/data/lawData.json";
import { FadeIn, ScaleIn } from "@/app/components/ui/animations";
import { motion, AnimatePresence } from "framer-motion";

const defaultTestimonialsData: TestimonialsData = (rawLawData as GlobalLawData).testimonials || {
    tagline: "Client Testimonials",
    heading: "What Our Clients Say",
    image: "/testinomial.svg",
    items: [
        {
            id: "1",
            quote: "I was struggling with family law for months before I found abc. They not only provided me with the solution I needed, but they also educated me on how to prevent the issue from happening again. Their team is incredibly knowledgeable and patient, and they always go the extra mile to ensure customer satisfaction. I am so grateful for their help and would recommend them to anyone.",
            authorName: "William Hazelip",
            authorRole: "Ui/Ux Designer",
            authorAvatar: "/service1.svg",
            rating: 5,
        },
    ],
};

interface TestimonialsProps {
    data?: TestimonialsData;
}

export default function Testimonials({ data = defaultTestimonialsData }: TestimonialsProps) {
    const { tagline, heading, image, items } = data;
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    const currentItem = items[currentIndex] || items[0];

    return (
        <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Column: Featured Image with Badge */}
                    <FadeIn direction="right" delay={0.1} className="lg:col-span-5 relative pr-4 lg:pr-6">
                        <div className="relative w-full aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-white/10 group">
                            <Image
                                src={image || "/testinomial.svg"}
                                alt="Client Testimonials"
                                fill
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/40 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Circular Seal Badge with Smooth Rotation */}
                        <div className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-[#0B0E14] p-2 flex items-center justify-center z-20 shadow-2xl">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                                className="relative w-full h-full rounded-full overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src="/seal-badge.svg"
                                    alt="Best Lawyer Seal Badge"
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>
                        </div>
                    </FadeIn>

                    {/* Right Column: Content & Testimonial Card */}
                    <div className="lg:col-span-7 flex flex-col justify-center">

                        {/* Tagline */}
                        <FadeIn direction="up" delay={0.1}>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-[#D4A359] text-xs sm:text-sm md:text-lg font-semibold tracking-widest uppercase">
                                    {tagline}
                                </span>
                                <span className="w-8 sm:w-12 h-[1px] bg-[#D4A359]/60 ml-1" />
                            </div>
                        </FadeIn>

                        {/* Heading */}
                        <FadeIn direction="up" delay={0.2}>
                            <h2 className="font-serif text-2xl sm:text-2xl md:text-5xl lg:text-[56px] leading-[1.2] tracking-tight text-white mb-4">
                                {heading}
                            </h2>
                        </FadeIn>

                        {/* Testimonial Quote Box with Animated Transitions */}
                        <FadeIn direction="up" delay={0.3} className="relative bg-[#0E131D]/90 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-2xl overflow-hidden">

                            {/* Giant Faint Background Double Quote Marks Watermark */}
                            <div className="absolute left-[28%] top-1/2 -translate-y-1/2 flex gap-4 text-white/[0.05] font-serif text-[180px] sm:text-[220px] lg:text-[260px] leading-none select-none pointer-events-none z-0">
                                ””
                            </div>

                            {/* Faint Background Taraju (Scales of Justice) Illustration (Bottom Right) */}
                            <div className="absolute -right-4 -bottom-8 text-white/[0.08] pointer-events-none z-0">
                                <svg
                                    viewBox="0 0 200 200"
                                    className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M100 20v160M85 180h30M92 20h16" />
                                    <circle cx="100" cy="20" r="5" />
                                    <path d="M30 45h140M30 45l-5 5M170 45l5 5" />
                                    <path d="M30 45L10 110M30 45l40 65" />
                                    <path d="M5 110c0 15 30 25 35 25s35-10 35-25H5z" />
                                    <path d="M170 45l-40 65M170 45l20 65" />
                                    <path d="M125 110c0 15 30 25 35 25s35-10 35-25h-70z" />
                                </svg>
                            </div>

                            {/* Quote Content with AnimatePresence */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className="relative z-10"
                                >
                                    {/* Quote Text */}
                                    <p className="text-gray-200 text-sm sm:text-base lg:text-[17px] font-light leading-relaxed mb-8 max-w-xl">
                                        "{currentItem.quote}"
                                    </p>

                                    {/* Author Footer & Navigation */}
                                    <div className="flex items-center justify-between gap-4 pt-2">

                                        {/* Author Info */}
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-white/15 shrink-0 bg-gray-800 shadow-md">
                                                <Image
                                                    src={currentItem.authorAvatar || "/service1.svg"}
                                                    alt={currentItem.authorName}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug mb-0.5">
                                                    {currentItem.authorName}
                                                </h4>
                                                <p className="text-gray-400 text-xs sm:text-sm font-light mb-1.5">
                                                    {currentItem.authorRole}
                                                </p>
                                                {/* Rating Stars */}
                                                <div className="flex items-center gap-1">
                                                    {Array.from({ length: currentItem.rating || 5 }).map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 fill-[#D4A359] text-[#D4A359]" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Carousel Navigation Buttons (Desktop) */}
                                        <div className="hidden sm:flex items-center gap-3 shrink-0 relative z-20">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={prevSlide}
                                                aria-label="Previous Testimonial"
                                                className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-[#D4A359] hover:text-[#0B0E14] hover:border-[#D4A359] flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={nextSlide}
                                                aria-label="Next Testimonial"
                                                className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-[#D4A359] hover:text-[#0B0E14] hover:border-[#D4A359] flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </motion.button>
                                        </div>

                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </FadeIn>

                        {/* Carousel Navigation Buttons (Mobile - Centered Outside Card) */}
                        <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevSlide}
                                aria-label="Previous Testimonial"
                                className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-[#D4A359] hover:text-[#0B0E14] hover:border-[#D4A359] flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextSlide}
                                aria-label="Next Testimonial"
                                className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-[#D4A359] hover:text-[#0B0E14] hover:border-[#D4A359] flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
