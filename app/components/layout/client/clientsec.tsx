"use client";

import React from "react";
import Image from "next/image";
import { Scale } from "lucide-react";
import lawData from "@/app/data/lawData-restructured.json";

import { GlobalLawData } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultany = lawData.categories.Veritas.sections.ClientResource?.variants?.VeritasClientResource1?.clientSection;

export interface ClientsecProps {
  data?: any;
}

export function Clientsec({ data = defaultany }: ClientsecProps) {
  if (!data) return null;

  const { title, subheading, image } = data;

  return (
    <section className="max-w-[1400px] mx-auto relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column matching reference screenshot */}
          <FadeIn direction="right" delay={0.1} className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Main Serif Heading matching site standard */}
            <h2 className="font-serif text-2xl sm:text-2xl md:text-5xl lg:text-[56px] leading-[1.15] tracking-tight text-white">
              {title || "Client Resources"}
            </h2>

            {/* Gold Scale Icon Divider matching reference screenshot */}
            <div className="flex items-center gap-3 my-4 sm:my-5">
              <span className="w-10 h-[1.5px] bg-[#D4A359]" />
              <Scale className="w-4 h-4 text-[#D4A359]" />
              <span className="w-10 h-[1.5px] bg-[#D4A359]" />
            </div>

            {/* Subheading / Description */}
            {subheading && (
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                {subheading}
              </p>
            )}
          </FadeIn>

          {/* Right Image Frame matching reference screenshot */}
          <FadeIn direction="left" delay={0.25} className="lg:col-span-6">
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] rounded-2xl overflow-hidden border border-[#D4A359]/50 shadow-2xl bg-slate-900 group">
              <Image src={image || "/about.svg"}
                alt={title || "Client Resources"}
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>

        </div>
    </section>
  );
}

export default Clientsec;
