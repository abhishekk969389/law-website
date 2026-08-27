"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Scale, Plus, Minus } from "lucide-react";
import { FaqData, GlobalLawData } from "@/types/law";
import rawLawData from "@/app/data/lawData.json";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion, AnimatePresence } from "framer-motion";

const defaultFaqData: FaqData = (rawLawData as GlobalLawData).faq || {
  tagline: "FAQ'S",
  heading: {
    line1: "Frequently Asked",
    highlight: "Questions",
  },
  subheading: "Find answers to common questions about our legal services and how we can help you.",
  image: "/testinomial.svg",
  items: [],
};

interface FaqProps {
  data?: FaqData;
}

export default function Faq({ data = defaultFaqData }: FaqProps) {
  const { tagline, heading, subheading, image, items } = data;
  const [openId, setOpenId] = useState<string>(items[0]?.id || "1");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="relative w-full bg-[#0C191B] text-white pt-2 lg:pt-4 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header (Centered) */}
        <FadeIn direction="up" delay={0.1} className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">

          {/* Top Tagline with Balance Scale Icon */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-12 h-[1px] bg-[#D4A359]/60" />
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-[#D4A359]" />
              <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
                {tagline}
              </span>
            </div>
            <span className="w-12 h-[1px] bg-[#D4A359]/60" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-2xl sm:text-2xl md:text-5xl lg:text-[56px] leading-[1.15] tracking-tight mb-4">
            <span className="text-white font-medium">{heading.line1}</span>{" "}
            <span className="text-[#D4A359] italic font-serif">{heading.highlight}</span>
          </h2>

          {/* Subheading */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-[620px] mx-auto">
            {subheading}
          </p>

        </FadeIn>

        {/* Split 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Accordion Questions */}
          <StaggerContainer staggerChildren={0.1} delayChildren={0.2} className="lg:col-span-6 space-y-4">
            {items.map((item) => {
              const isOpen = openId === item.id;
              return (
                <StaggerItem key={item.id}>
                  <div
                    className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${isOpen
                        ? "bg-[#0C191B]/95 border-[#D4A359]/40 shadow-lg"
                        : "bg-[#0C191B]/90 border-white/10 hover:border-white/20"
                      }`}
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer"
                    >
                      <span
                        className={`font-medium text-base sm:text-lg leading-snug transition-colors ${isOpen ? "text-[#D4A359]" : "text-white hover:text-[#E3C280]"
                          }`}
                      >
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0 flex items-center justify-center"
                      >
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-[#D4A359]" />
                        ) : (
                          <Plus className="w-5 h-5 text-[#D4A359]" />
                        )}
                      </motion.div>
                    </button>

                    {/* Accordion Content with Framer Motion AnimatePresence */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Right Column: Featured Image */}
          <FadeIn direction="left" delay={0.3} className="lg:col-span-6 relative">
            <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src={image || "/testinomial.svg"}
                alt="Frequently Asked Questions"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C191B]/40 via-transparent to-transparent opacity-60" />
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
