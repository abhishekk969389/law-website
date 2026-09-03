"use client";

import React from "react";
import lawData from "@/app/data/lawData-restructured.json";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { TopbarData, GlobalLawData } from "@/app/data";

// Global data fallback from lawData.json
const defaultTopbarData: TopbarData = lawData.categories.Veritas.sections.Topbar?.variants?.VeritasTopbar1?.topbar;

interface TopbarProps {
    data?: TopbarData;
}

export function Topbar({ data = defaultTopbarData }: TopbarProps) {
    const { address, phone, email, workingHours, socialLinks } = data;

    return (
        <div className="w-full bg-[#0B0E14] text-slate-300 border-b border-slate-800/60 text-xs md:text-[13px] font-medium selection:bg-amber-500/30 ">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-y-2 gap-x-6">

                {/* Left Side: Address, Phone, Email */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 md:gap-8">
                    {/* Address */}
                    {address && (
                        <div className="flex items-center gap-2.5 group cursor-pointer hover:text-white transition-colors">
                            <MapPin className="w-[20px] h-[20px] text-[#C99A2E] shrink-0 transition-transform group-hover:scale-110" />
                            <span>{address}</span>
                        </div>
                    )}

                    {/* Phone */}
                    {phone && (
                        <a
                            href={`tel:${phone.replace(/\s+/g, "")}`}
                            className="flex items-center gap-2.5 group hover:text-white transition-colors"
                        >
                            <Phone className="w-[20px] h-[20px] text-[#C99A2E] shrink-0 transition-transform group-hover:scale-110" />
                            <span>{phone}</span>
                        </a>
                    )}

                    {/* Email */}
                    {email && (
                        <a
                            href={`mailto:${email}`}
                            className="flex items-center gap-2.5 group hover:text-white transition-colors"
                        >
                            <Mail className="w-[20px] h-[20px] text-[#C99A2E] shrink-0 transition-transform group-hover:scale-110" />
                            <span>{email}</span>
                        </a>
                    )}
                </div>

                {/* Right Side: Working Hours & Social Icons */}
                <div className="flex items-center gap-y-2 gap-x-6 md:gap-8">
                    {/* Working Hours */}
                    {workingHours && (
                        <div className="flex items-center gap-2.5 group cursor-pointer hover:text-white transition-colors">
                            <Clock className="w-[20px] h-[20px] text-[#C99A2E] shrink-0 transition-transform group-hover:scale-110" />
                            <span>{workingHours}</span>
                        </div>
                    )}

                    {/* Social Links */}
                    {socialLinks && socialLinks.length > 0 && (
                        <div className="flex items-center gap-5 text-white font-bold">
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
                                            <span className="font-bold text-lg leading-none font-serif tracking-tighter">in</span>
                                        )}
                                        {platformLower === "facebook" && (
                                            <span className="font-bold text-lg leading-none font-serif">f</span>
                                        )}
                                        {(platformLower === "x" || platformLower === "twitter") && (
                                            <svg
                                                className="w-[18px] h-[18px] fill-current"
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
