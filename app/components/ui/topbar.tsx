"use client";

import React from "react";
import lawData from "@/app/data/lawData-restructured.json";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { TopbarData, GlobalLawData } from "@/app/data";

const defaultTopbarData: TopbarData =
  lawData.categories.Veritas.sections.Topbar?.variants?.VeritasTopbar1?.topbar;

interface TopbarProps {
  data?: TopbarData;
}

export function Topbar({ data = defaultTopbarData }: TopbarProps) {
  const { address, phone, email, workingHours, socialLinks } = data;

  return (
    <div className="w-full bg-[#0B0E14] text-slate-300 border-b border-slate-800/60 text-sm md:text-[13px] font-medium selection:bg-amber-500/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-2.5 flex items-center justify-between gap-x-4 md:gap-x-6">
        { }
        <div className="flex items-center gap-x-4 lg:gap-6 xl:gap-8">
          { }
          {address && (
            <div className="hidden lg:flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
              <MapPin className="w-[18px] h-[18px] text-[#C99A2E] shrink-0 transition-transform group-hover:scale-110" />
              <span className="whitespace-nowrap">{address}</span>
            </div>
          )}

          { }
          {phone && (
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 group hover:text-white transition-colors"
            >
              <Phone className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-[#C99A2E] shrink-0 transition-transform group-hover:scale-110" />
              <span className="whitespace-nowrap">{phone}</span>
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}`}
              className="hidden md:flex items-center gap-2 group hover:text-white transition-colors"
            >
              <Mail className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-[#C99A2E] shrink-0 transition-transform group-hover:scale-110" />
              <span className="whitespace-nowrap">{email}</span>
            </a>
          )}
        </div>

        <div className="flex items-center gap-x-4 lg:gap-6 xl:gap-8">
          {workingHours && (
            <div className="hidden md:flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
              <Clock className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-[#C99A2E] shrink-0 transition-transform group-hover:scale-110" />
              <span className="whitespace-nowrap">{workingHours}</span>
            </div>
          )}

          {socialLinks && socialLinks.length > 0 && (
            <div className="flex items-center gap-3.5 sm:gap-5 text-white font-bold shrink-0">
              {socialLinks.map((link: any, index: any) => {
                const platformLower = link.platform.toLowerCase();
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="hover:text-amber-400 transition-colors p-0.5 flex items-center justify-center"
                  >
                    {platformLower === "linkedin" && (
                      <span className="font-bold text-base md:text-lg leading-none font-serif tracking-tighter">
                        in
                      </span>
                    )}
                    {platformLower === "facebook" && (
                      <span className="font-bold text-base md:text-lg leading-none font-serif">
                        f
                      </span>
                    )}
                    {(platformLower === "x" || platformLower === "twitter") && (
                      <svg
                        className="w-[15px] h-[15px] md:w-[18px] md:h-[18px] fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
