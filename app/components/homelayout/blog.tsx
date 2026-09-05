"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PenTool,
  User,
  Calendar,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { BlogData, GlobalLawData } from "@/app/data";
import lawData from "@/app/data/lawData-restructured.json";

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const globalData = {} as unknown as GlobalLawData;

export default function Blog({ data }: { data?: any }) {
  const blogSection =
    data ||
    lawData.categories.Veritas.sections.Blog?.variants?.VeritasBlog1
      ?.blogSection ||
    lawData.categories.Veritas.sections.Blog?.variants?.VeritasBlog1?.blog;
  if (!blogSection) return null;

  const {
    tagline = "NEWS & BLOG",
    heading = { line1: "Legal News &", highlight: "Updates" },
    subheading = "Stay informed with the latest legal insights, case updates, and important changes that matter to you.",
    buttonText = "View All Articles",
    buttonHref = "/blog",
    items = [],
  } = blogSection;

  const displayedItems = items.slice(0, 3);

  return (
    <section className="relative w-full bg-[#0C191B] text-white py-8 sm:py-10 md:py-10 lg:py-12 mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        { }
        <FadeIn
          direction="up"
          delay={0.1}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-9"
        >
          { }
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 max-w-full overflow-hidden">
            <span className="w-6 sm:w-12 h-[1px] bg-[#D4A359]/60 shrink" />
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <PenTool className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4A359]" />
              <span className="text-[#D4A359] text-[11px] sm:text-sm md:text-lg font-semibold tracking-wider sm:tracking-widest uppercase">
                {tagline}
              </span>
            </div>
            <span className="w-6 sm:w-12 h-[1px] bg-[#D4A359]/60 shrink" />
          </div>

          { }
          <h2 className="font-serif text-2xl sm:text-2xl md:text-5xl lg:text-[56px] leading-[1.2] tracking-tight mb-4">
            <span className="text-white font-medium">{heading.line1}</span>{" "}
            <span className="text-[#D4A359] italic font-serif">
              {heading.highlight}
            </span>
          </h2>

          { }
          {subheading && (
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-[620px] mx-auto">
              {subheading}
            </p>
          )}
        </FadeIn>

        { }
        <StaggerContainer
          staggerChildren={0.12}
          delayChildren={0.2}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {displayedItems.map((item: any) => {
            const detailHref = item.linkHref || `/blog/${item.slug || item.id}`;

            return (
              <StaggerItem key={item.id}>
                <Link href={detailHref} className="block h-full">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col bg-[#0C191B]/90 border border-white/10 rounded-3xl p-5 sm:p-6 transition-colors duration-300 hover:border-[#D4A359]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] group h-full cursor-pointer"
                  >
                    <div className="block relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-slate-900">
                      <Image
                        src={item.image || "/about.svg"}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/40 via-transparent to-transparent opacity-60" />
                    </div>

                    <div className="flex items-center gap-3.5 text-sm text-gray-400 font-light mb-3 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#D4A359]" />
                        <span>By {item.author}</span>
                      </div>
                      <span className="text-gray-600">|</span>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#D4A359]" />
                        <span>{item.date}</span>
                      </div>
                      <span className="text-gray-600">|</span>
                      <div className="flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#D4A359]" />
                        <span>{item.commentsCount}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-medium text-white leading-snug mb-5 group-hover:text-[#E3C280] transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="mt-auto">
                      <div className="inline-flex items-center gap-2 text-[#D4A359] text-sm sm:text-sm font-medium hover:text-[#E3C280] transition-colors group/link">
                        <span>{item.linkText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn
          direction="up"
          delay={0.4}
          className="flex items-center justify-center mt-10 sm:mt-12"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href={buttonHref}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-md border border-white/15 bg-white/5 hover:bg-[#D4A359] hover:text-[#0B0E14] hover:border-[#D4A359] text-white text-sm font-medium transition-all duration-300 backdrop-blur-sm group/btn"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
