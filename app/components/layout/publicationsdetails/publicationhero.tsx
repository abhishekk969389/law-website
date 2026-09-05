"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Folder } from "lucide-react";
import { PublicationDetailItem } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";

interface PublicationHeroProps {
  publication: PublicationDetailItem;
}

export function PublicationHero({ publication }: PublicationHeroProps) {
  if (!publication) return null;

  return (
    <FadeIn
      direction="up"
      delay={0.1}
      duration={0.6}
      className="space-y-5 text-left select-none"
    >
      { }
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 shadow-2xl">
        <Image
          src={publication.image || "/service1.svg"}
          alt={publication.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/40 via-transparent to-transparent pointer-events-none" />
      </div>

      { }
      <div className="flex items-center gap-2 text-sm sm:text-[13px] font-semibold tracking-wider uppercase pt-1">
        <div className="flex items-center gap-1.5 text-slate-400">
          <Calendar className="w-4 h-4 text-[#D4A359]" />
          <span>{publication.date}</span>
        </div>
        <span className="text-slate-600 font-bold">•</span>
        <div className="flex items-center gap-1.5 text-[#D4A359]">
          <Folder className="w-4 h-4 text-[#D4A359]" />
          <span>{publication.category}</span>
        </div>
      </div>

      { }
      <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-white leading-[1.2] tracking-tight">
        {publication.title}
      </h1>

      { }
      {publication.excerpt && (
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
          {publication.excerpt}
        </p>
      )}
    </FadeIn>
  );
}

export default PublicationHero;
