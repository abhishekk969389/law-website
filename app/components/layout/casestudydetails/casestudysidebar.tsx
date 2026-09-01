"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  PhoneCall,
  Mail,
  Globe,
  MapPin,
} from "lucide-react";
import rawLawData from "@/app/data/lawData.json";
import { CaseStudySidebarData, CaseStudyDetailItem, GlobalLawData } from "@/types/law";

export interface CaseStudySidebarProps {
  currentId?: string;
  allCaseStudies?: (CaseStudyDetailItem | { id: string; slug?: string; title: string | { whiteText: string; goldText: string }; image: string })[];
  sidebarData?: CaseStudySidebarData;
}

const globalCaseStudySidebar = (rawLawData as unknown as GlobalLawData).caseStudySidebar;
const defaultCaseStudyItems = (rawLawData as unknown as GlobalLawData).caseStudySection?.items || [];

export function CaseStudySidebar({
  currentId,
  allCaseStudies = [],
  sidebarData,
}: CaseStudySidebarProps) {
  const contact = sidebarData?.contact || globalCaseStudySidebar?.contact || {
    heading: "Have Any Query? Feel Free To",
    highlightText: "Contact",
    phone: "+1 222 333 44 55",
    email: "info@veritas.com",
    website: "www.veritas.com",
    address: "123 Legal Street, New York, USA",
  };

  const listHeading = sidebarData?.listHeading || globalCaseStudySidebar?.listHeading || "Case Study List";

  // Use provided case studies or fallback list
  const listItems = (allCaseStudies && allCaseStudies.length > 0)
    ? allCaseStudies
    : defaultCaseStudyItems.map(item => ({
        id: item.linkHref ? item.linkHref.split("/").pop() || item.id : item.id,
        slug: item.linkHref ? item.linkHref.split("/").pop() || item.id : item.id,
        title: item.title,
        image: item.image,
      }));

  return (
    <aside className="space-y-8 sticky top-24">
      {/* 1. Case Study List Widget */}
      {listItems && listItems.length > 0 && (
        <div className="rounded-2xl bg-[#0A0E17] border border-slate-800/80 p-5 space-y-3 shadow-xl">
          <div className="px-1">
            <h3 className="font-serif text-xl md:text-2xl text-white font-semibold tracking-tight">
              {listHeading}
            </h3>
            <div className="h-[2px] w-10 bg-[#D4A359] mt-2 mb-4" />
          </div>

          <nav className="space-y-2.5">
            {listItems.map((item) => {
              const slug = ("slug" in item && item.slug) ? item.slug : item.id;
              const isActive =
                currentId?.toLowerCase() === item.id.toLowerCase() ||
                currentId?.toLowerCase() === slug.toLowerCase();

              const titleText = typeof item.title === "string"
                ? item.title
                : `${item.title.whiteText} ${item.title.goldText}`;

              return (
                <Link
                  key={item.id}
                  href={`/casestudy/${slug}`}
                  className={`flex items-center gap-3.5 p-3 rounded-xl text-sm transition-all duration-200 group border ${
                    isActive
                      ? "bg-[#131926] border-[#D4A359]/70 text-[#D4A359] font-medium shadow-md"
                      : "border-transparent text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {/* Image Thumbnail */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-slate-800">
                    <Image
                      src={item.image || "/casestudy1.svg"}
                      alt={titleText}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <span className="text-xs sm:text-sm font-semibold leading-snug line-clamp-2 flex-1 group-hover:text-[#D4A359] transition-colors">
                    {titleText}
                  </span>

                  {/* Chevron Right */}
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isActive
                        ? "text-[#D4A359] translate-x-0.5"
                        : "text-slate-500 group-hover:text-[#D4A359] group-hover:translate-x-0.5"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* 2. Have Any Query? Feel Free To Contact Widget matching exact screenshot */}
      {contact && (
        <div className="relative rounded-2xl bg-[#0A0E17] border border-slate-800/80 p-6 sm:p-7 space-y-5 shadow-xl overflow-hidden text-left">
          {/* Right Side Background Lady Justice / Watermark Artwork */}
          {contact.backgroundImage && (
            <div className="absolute right-0 top-0 bottom-0 w-[60%] opacity-30 pointer-events-none z-0">
              <Image
                src={contact.backgroundImage}
                alt="Lady Justice Background"
                fill
                className="object-cover object-right filter brightness-75 contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E17] via-[#0A0E17]/20 to-transparent" />
            </div>
          )}

          {/* Header Title & Divider */}
          <div className="relative z-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-semibold leading-snug tracking-tight">
              {contact.titleLines && contact.titleLines.length > 0 ? (
                <>
                  {contact.titleLines.map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                  {contact.lastLinePrefix}
                  <span className="text-[#D4A359]">{contact.highlightText || ""}</span>
                </>
              ) : (
                <>
                  {contact.heading}{" "}
                  <span className="text-[#D4A359]">{contact.highlightText || ""}</span>
                </>
              )}
            </h3>
            <div className="h-[1px] w-full bg-slate-800/80 my-4" />
          </div>

          {/* 4 Contact Items */}
          <div className="space-y-4 pt-1 relative z-10">
            {/* Phone */}
            {contact.phone && (
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 text-slate-200 hover:text-[#D4A359] transition-colors group"
              >
                <div className="w-11 h-11 rounded-full border border-[#D4A359]/70 bg-[#0A0E17]/90 text-[#D4A359] flex items-center justify-center shrink-0 shadow-md group-hover:border-[#D4A359] group-hover:bg-[#D4A359] group-hover:text-black transition-all">
                  <PhoneCall className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-sm sm:text-base font-medium tracking-wide">
                  {contact.phone}
                </span>
              </a>
            )}

            {/* Email */}
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 text-slate-200 hover:text-[#D4A359] transition-colors group"
              >
                <div className="w-11 h-11 rounded-full border border-[#D4A359]/70 bg-[#0A0E17]/90 text-[#D4A359] flex items-center justify-center shrink-0 shadow-md group-hover:border-[#D4A359] group-hover:bg-[#D4A359] group-hover:text-black transition-all">
                  <Mail className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-sm sm:text-base font-medium tracking-wide">
                  {contact.email}
                </span>
              </a>
            )}

            {/* Website */}
            {contact.website && (
              <a
                href={`https://${contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-200 hover:text-[#D4A359] transition-colors group"
              >
                <div className="w-11 h-11 rounded-full border border-[#D4A359]/70 bg-[#0A0E17]/90 text-[#D4A359] flex items-center justify-center shrink-0 shadow-md group-hover:border-[#D4A359] group-hover:bg-[#D4A359] group-hover:text-black transition-all">
                  <Globe className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-sm sm:text-base font-medium tracking-wide">
                  {contact.website}
                </span>
              </a>
            )}

            {/* Address */}
            {(contact.addressLines || contact.address) && (
              <div className="flex items-start gap-4 text-slate-200">
                <div className="w-11 h-11 rounded-full border border-[#D4A359]/70 bg-[#0A0E17]/90 text-[#D4A359] flex items-center justify-center shrink-0 shadow-md mt-0.5">
                  <MapPin className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-sm sm:text-base font-medium leading-snug">
                  {contact.addressLines && contact.addressLines.length > 0 ? (
                    contact.addressLines.map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))
                  ) : contact.address && contact.address.includes(",") ? (
                    (() => {
                      const firstComma = contact.address.indexOf(",");
                      const line1 = contact.address.slice(0, firstComma + 1);
                      const line2 = contact.address.slice(firstComma + 1).trim();
                      return (
                        <>
                          <span className="block">{line1}</span>
                          <span className="block">{line2}</span>
                        </>
                      );
                    })()
                  ) : (
                    contact.address || null
                  )}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}

export default CaseStudySidebar;
