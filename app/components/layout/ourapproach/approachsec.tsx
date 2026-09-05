"use client";

import React from "react";
import Image from "next/image";
import {
  Target,
  ShieldCheck,
  Gavel,
  Handshake,
  Scale,
  LucideIcon,
} from "lucide-react";
import lawData from "@/app/data/lawData-restructured.json";

import { ApproachData, GlobalLawData } from "@/app/data";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultApproachData =
  lawData.categories.Veritas.sections.OurApproach?.variants?.VeritasOurApproach1
    ?.ourApproachSection;

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  "shield-check": ShieldCheck,
  gavel: Gavel,
  handshake: Handshake,
};

export interface ApproachSecProps {
  data?: ApproachData;
}

export function ApproachSec({ data = defaultApproachData }: ApproachSecProps) {
  if (!data) return null;

  const { tagline, heading, description, image, items } = data;

  return (
    <section className="relative w-full bg-[#08171B] text-white  mt-0 overflow-hidden select-none">
      { }
      <div className="relative w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex items-start">
        { }
        <div className="absolute inset-0 z-0">
          <Image
            src={image || "/subbanner.svg"}
            alt="Our Approach"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover object-right"
          />
        </div>

        { }
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ filter: "drop-shadow(20px 0 25px rgba(0, 0, 0, 0.95))" }}
        >
          { }
          <div className="block lg:hidden w-full h-full bg-[#08171B]/95" />

          { }
          <div
            className="hidden lg:block w-full h-full bg-[#08171B]"
            style={{
              clipPath: "polygon(0 0, 58% 0, 48% 100%, 0 100%)",
            }}
          />
        </div>

        { }
        <div className="relative z-20 max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 md:mt-12 lg:mt-14 pb-8 sm:pb-10">
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl mx-auto md:mx-0">
            { }
            <FadeIn direction="up" delay={0.1}>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <span className="w-8 h-[1px] bg-[#D4A359]/60" />
                <Scale className="w-4 h-4 text-[#D4A359] shrink-0" />
                <span className="text-[#D4A359] text-sm md:text-lg font-semibold tracking-widest uppercase">
                  {tagline}
                </span>
                <span className="w-8 h-[1px] bg-[#D4A359]/60" />
              </div>
            </FadeIn>

            { }
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-[56px] leading-[1.15] tracking-tight mb-4 text-center md:text-left">
                <span className="block text-white font-medium mb-1">
                  {heading.line1}
                </span>
                <span className="block text-white font-medium">
                  {heading.line2Prefix || ""}
                  <span className="text-[#D4A359] italic font-serif font-medium">
                    {heading.highlight}
                  </span>
                </span>
              </h2>
            </FadeIn>

            { }
            <FadeIn direction="up" delay={0.25}>
              <div className="flex items-center gap-4 my-4 max-w-md mx-auto md:mx-0">
                <div className="h-[1px] bg-slate-800 flex-1" />
                <span className="text-[#D4A359] text-sm sm:text-base md:text-lg font-medium leading-none drop-shadow-[0_0_6px_rgba(212,163,89,0.4)]">
                  ❖
                </span>
                <div className="h-[1px] bg-slate-800 flex-1" />
              </div>
            </FadeIn>

            { }
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6 font-normal text-center md:text-left">
                {description}
              </p>
            </FadeIn>

            { }
            <StaggerContainer
              staggerChildren={0.1}
              delayChildren={0.35}
              className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 sm:gap-4 md:gap-5 pt-5 border-t border-slate-800/80"
            >
              {items &&
                items.map((item: any) => {
                  const IconComponent = iconMap[item.icon] || Target;

                  return (
                    <StaggerItem key={item.id}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="flex flex-col items-start group cursor-pointer"
                      >
                        { }
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 6 }}
                          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D4A359]/60 flex items-center justify-center mb-2.5 p-2 group-hover:border-[#D4A359] group-hover:bg-[#D4A359]/10 transition-all duration-300"
                        >
                          <IconComponent className="w-5 h-5 text-[#D4A359]" />
                        </motion.div>

                        { }
                        <h3 className="font-serif font-semibold text-white text-sm sm:text-base md:text-lg mb-1 group-hover:text-[#D4A359] transition-colors">
                          {item.title}
                        </h3>

                        { }
                        <p className="text-slate-400 text-sm md:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApproachSec;
