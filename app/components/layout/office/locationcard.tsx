"use client";

import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import lawData from "@/app/data/lawData-restructured.json";

import { OfficeLocationSectionData, GlobalLawData } from "@/types/law";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultOfficeLocationsData = lawData.categories.Veritas.sections.Offices?.variants?.VeritasOffices1?.officeLocations;

// Custom Gold Architectural Vector SVG Monuments for Indian Cities
const MonumentSvg: React.FC<{ icon?: string }> = ({ icon }) => {
  switch (icon) {
    case "india-gate": // Delhi - India Gate Arch
      return (
        <svg className="w-12 h-12 text-[#D4A359]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 56V18H52V56" />
          <path d="M8 18H56V14H8V18Z" />
          <path d="M16 14L20 8H44L48 14" />
          <path d="M24 56V34C24 29.5817 27.5817 26 32 26C36.4183 26 40 29.5817 40 34V56" />
          <path d="M12 24H52" />
          <path d="M12 42H24M40 42H52" />
          <path d="M8 56H56" strokeWidth="2" />
        </svg>
      );

    case "gateway-of-india": // Mumbai - Gateway of India
      return (
        <svg className="w-12 h-12 text-[#D4A359]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 56V20H54V56" />
          <path d="M6 20H58V16H6V20Z" />
          <path d="M22 56V32C22 26.4772 26.4772 22 32 22C37.5228 22 42 26.4772 42 32V56" />
          <path d="M16 16V10M48 16V10M32 16V8" />
          <circle cx="32" cy="7" r="1.5" fill="currentColor" />
          <path d="M10 28H22M42 28H54" />
          <path d="M10 42H22M42 42H54" />
          <path d="M6 56H58" strokeWidth="2" />
        </svg>
      );

    case "vidhana-soudha": // Bengaluru - Palace / Dome
      return (
        <svg className="w-12 h-12 text-[#D4A359]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 8C26 14 26 22 26 22H38C38 22 38 14 32 8Z" />
          <path d="M32 4V8" />
          <path d="M10 56V28H54V56" />
          <path d="M6 28H58V24H6V28Z" />
          <path d="M26 56V36C26 32.6863 28.6863 30 32 30C35.3137 30 38 32.6863 38 36V56" />
          <path d="M14 28V20L20 24V28" />
          <path d="M50 28V20L44 24V28" />
          <path d="M6 56H58" strokeWidth="2" />
        </svg>
      );

    case "charminar": // Hyderabad - Charminar 4 Towers
      return (
        <svg className="w-12 h-12 text-[#D4A359]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 56V12L16 8L20 12V56" />
          <path d="M44 56V12L48 8L52 12V56" />
          <path d="M20 24H44V56H20V24Z" />
          <path d="M26 56V40C26 36.6863 28.6863 34 32 34C35.3137 34 38 36.6863 38 40V56" />
          <path d="M20 30H44" />
          <path d="M12 24H20M44 24H52" />
          <path d="M12 40H20M44 40H52" />
          <path d="M8 56H56" strokeWidth="2" />
        </svg>
      );

    case "hawa-mahal": // Jaipur - Hawa Mahal Windows Palace
      return (
        <svg className="w-12 h-12 text-[#D4A359]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 56V16L32 6L50 16V56" />
          <path d="M20 22H26M38 22H44" />
          <path d="M20 32H26M38 32H44" />
          <path d="M20 42H26M38 42H44" />
          <path d="M29 16H35V56H29V16Z" />
          <path d="M14 26H50M14 36H50M14 46H50" />
          <path d="M26 56V48C26 46.3431 28.6863 45 32 45C35.3137 45 38 46.3431 38 48V56" />
          <path d="M10 56H54" strokeWidth="2" />
        </svg>
      );

    case "howrah-bridge": // Kolkata - Howrah Bridge Suspension
      return (
        <svg className="w-12 h-12 text-[#D4A359]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 52H56" strokeWidth="2" />
          <path d="M14 52V18L24 30L32 14L40 30L50 18V52" />
          <path d="M14 18H50" />
          <path d="M6 38H58" />
          <path d="M14 38L24 52M50 38L40 52" />
          <path d="M32 14V52" />
        </svg>
      );

    case "ahmedabad": // Ahmedabad - Jali Arch / Mosque Dome
      return (
        <svg className="w-12 h-12 text-[#D4A359]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 56V26C16 17.1634 23.1634 10 32 10C40.8366 10 48 17.1634 48 26V56" />
          <path d="M24 56V34C24 29.5817 27.5817 26 32 26C36.4183 26 40 29.5817 40 34V56" />
          <path d="M10 56H54" strokeWidth="2" />
          <path d="M32 4V10" />
          <path d="M20 20C24 16 40 16 44 20" />
        </svg>
      );

    default: // Chandigarh / General Landmark Pillar
      return (
        <svg className="w-12 h-12 text-[#D4A359]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M26 56V24L32 10L38 24V56" />
          <path d="M20 56V32L26 24M44 56V32L38 24" />
          <path d="M32 10V56" />
          <path d="M14 56H50" strokeWidth="2" />
          <circle cx="32" cy="7" r="2" fill="currentColor" />
        </svg>
      );
  }
};

export interface LocationcardProps {
  data?: OfficeLocationSectionData;
}

export function Locationcard({ data = defaultOfficeLocationsData }: LocationcardProps) {
  if (!data) return null;

  const { title, items } = data;

  return (
    <section className="relative w-full bg-[#0B0E14] text-white mt-4 sm:mt-6 md:mt-8 lg:mt-10 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Title */}
        <FadeIn direction="up" delay={0.1}>
          <h2 className="font-serif text-2xl sm:text-2xl md:text-4xl text-white mb-6 font-medium">
            {title || "Our Office Locations"}
          </h2>
        </FadeIn>

        {/* 8 Office Locations Cards Grid (3 columns on lg screens) */}
        <StaggerContainer staggerChildren={0.1} delayChildren={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items &&
            items.map((item) => (
              <StaggerItem key={item.id}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] p-6 sm:p-7 flex flex-col justify-between hover:border-[#D4A359]/50 transition-colors duration-300 shadow-xl min-h-[260px] cursor-pointer h-full"
                >
                  {/* Top Section: Left Monument Box + City Title & Address + Right Phone Circle Badge */}
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      {/* Left: Dark Container Box for Monument Icon + City & Address */}
                      <div className="flex items-start gap-4 flex-1">
                        {/* Dark Square Box for Monument Vector Icon */}
                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl border border-slate-800 bg-[#060911] flex items-center justify-center shrink-0 shadow-md p-2.5">
                        <MonumentSvg icon={item.icon} />
                      </div>

                      {/* City Title & Address */}
                      <div className="flex-1">
                        <h3 className="font-serif font-semibold text-white text-lg sm:text-xl group-hover:text-[#D4A359] transition-colors leading-snug">
                          {item.city}
                        </h3>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-1.5">
                          {item.address}
                        </p>
                      </div>
                    </div>

                    {/* Right: Phone Icon Circle Badge */}
                    <a
                      href={`tel:${item.phone.replace(/\s+/g, "")}`}
                      className="w-10 h-10 rounded-full border border-[#D4A359]/60 flex items-center justify-center bg-[#070B12] text-[#D4A359] hover:bg-[#D4A359] hover:text-[#0A0E17] transition-all shrink-0 shadow-[0_0_10px_rgba(212,163,89,0.1)] mt-1"
                      title={`Call ${item.city} Office`}
                    >
                      <Phone className="w-4.5 h-4.5" />
                    </a>
                  </div>

                  {/* Divider Line */}
                  <div className="w-full h-[1px] bg-slate-800/60 my-4 sm:my-5" />
                </div>

                {/* Bottom Action Section: Get Directions Link & Phone Number */}
                <div>
                  <a
                    href={item.directionsLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#D4A359] text-xs sm:text-sm font-semibold hover:underline group-hover:gap-2.5 transition-all mb-1"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  {/* Phone Number */}
                  <a
                    href={`tel:${item.phone.replace(/\s+/g, "")}`}
                    className="text-white hover:text-[#D4A359] font-medium text-sm sm:text-base block transition-colors"
                  >
                    {item.phone}
                  </a>
                </div>

                </motion.div>
              </StaggerItem>
            ))}
        </StaggerContainer>

      </div>
    </section>
  );
}

export default Locationcard;
