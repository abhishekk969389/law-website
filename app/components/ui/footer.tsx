"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Calendar, Share2 } from "lucide-react";
import { FooterData, GlobalLawData } from "@/app/data";
import lawData from "@/app/data/lawData-restructured.json";

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultFooterData: FooterData = lawData.categories.Veritas.sections.Footer
  ?.variants?.VeritasFooter1?.footer as FooterData;

interface FooterProps {
  data?: FooterData;
}

export default function Footer({ data = defaultFooterData }: FooterProps) {
  const {
    backgroundImage,
    newsletter,
    brand,
    popularCases,
    resources,
    recentNews,
    contact,
    copyrightText,
  } = data;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="relative w-full bg-[#0C191B] text-white pt-6 md:pt-8 overflow-hidden">
      {}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={backgroundImage || "/footerimg.svg"}
          alt="Footer Background"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center opacity-95"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C191B]/40 via-[#0C191B]/20 to-[#0C191B]/50" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {}
        <FadeIn
          direction="up"
          delay={0.1}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-7 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#D4A359]" />
              <span className="text-[#D4A359] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                {newsletter.tagline}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-white tracking-tight leading-tight">
              {newsletter.heading}
            </h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg lg:max-w-xl"
          >
            <input
              type="email"
              placeholder={newsletter.inputPlaceholder}
              className="w-full px-6 py-4 bg-white text-[#0B1A2D] placeholder:text-[#0B1A2D] font-bold text-sm focus:outline-none rounded-none"
              required
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full sm:w-auto bg-[#B98E53] hover:bg-[#a67d45] text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-none transition-colors shrink-0 whitespace-nowrap cursor-pointer"
            >
              {newsletter.buttonText}
            </motion.button>
          </form>
        </FadeIn>

        {}
        <StaggerContainer
          staggerChildren={0.1}
          delayChildren={0.2}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-6 py-7"
        >
          {}
          <StaggerItem className="lg:col-span-3">
            <div className="mb-4">
              <Link href="/" className="inline-block">
                <Image
                  src={brand.logo || "/main-logo.svg"}
                  width={320}
                  height={80}
                  alt={brand.title || "Veritas Law Partners Logo"}
                  className="h-12 sm:h-14 md:h-16 lg:h-[72px] w-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-[#a2b6c5] text-sm md:text-[12px] lg:text-[16px] leading-relaxed mb-6 max-w-sm font-normal">
              {brand.description}
            </p>

            <div>
              <h5 className="text-[#D4A359] text-lg lg:text-xl font-bold mb-3">
                {brand.followUsText}
              </h5>
              <div className="flex items-center gap-3.5">
                {(brand?.socials || []).map((social: any) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    aria-label={social.name}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full border border-[#D4A359]/70 hover:border-[#D4A359] hover:bg-[#D4A359]/15 flex items-center justify-center text-[#D4A359] transition-all duration-300"
                  >
                    {social.name === "Facebook" && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {social.name === "Twitter" && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                      </svg>
                    )}
                    {social.name === "Behance" && (
                      <span className="font-bold text-xs sm:text-sm text-[#D4A359]">
                        Bē
                      </span>
                    )}
                    {social.name === "Youtube" && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )}
                    {!["Facebook", "Twitter", "Behance", "Youtube"].includes(
                      social.name,
                    ) && (
                      <span className="font-bold text-xs sm:text-sm">
                        {social.name.charAt(0)}
                      </span>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </StaggerItem>

          {}
          <StaggerItem className="lg:col-span-2">
            <h5 className="text-lg lg:text-xl font-bold text-[#D4A359] mb-4">
              {popularCases?.title}
            </h5>
            <ul className="space-y-2.5 lg:space-y-3">
              {(popularCases?.links || []).map((link: any) => (
                <li key={link.id}>
                  <Link
                    href={link.linkHref}
                    className="text-slate-100 hover:text-[#D4A359] text-sm lg:text-[15.5px] font-semibold flex items-center gap-2 transition-colors"
                  >
                    <span className="text-[#D4A359] text-base lg:text-lg font-bold leading-none">
                      •
                    </span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {}
          <StaggerItem className="lg:col-span-2">
            <h5 className="text-lg lg:text-xl font-bold text-[#D4A359] mb-4">
              {resources?.title || "Resources"}
            </h5>
            <ul className="space-y-2.5 lg:space-y-3">
              {(
                resources?.links || [
                  {
                    id: "1",
                    title: "Legal Advice",
                    linkHref: "/resources/legal-advice",
                  },
                  {
                    id: "2",
                    title: "Privacy Policy",
                    linkHref: "/privacy-policy",
                  },
                  { id: "3", title: "Terms of Service", linkHref: "/terms" },
                  { id: "4", title: "Case Archive", linkHref: "/cases" },
                ]
              ).map((link: any) => (
                <li key={link.id}>
                  <Link
                    href={link.linkHref}
                    className="text-slate-100 hover:text-[#D4A359] text-sm lg:text-[15.5px] font-semibold flex items-center gap-2 transition-colors"
                  >
                    <span className="text-[#D4A359] text-base lg:text-lg font-bold leading-none">
                      •
                    </span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {}
          <StaggerItem className="lg:col-span-2">
            <h5 className="text-lg lg:text-xl font-bold text-[#D4A359] mb-4">
              {recentNews?.title}
            </h5>
            <div className="space-y-3.5">
              {(recentNews?.items || []).map((item: any) => (
                <Link
                  key={item.id}
                  href={item.linkHref}
                  className="flex items-center gap-3 group"
                >
                  <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-gray-800">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h6 className="text-sm lg:text-[15px] font-bold text-white group-hover:text-[#D4A359] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h6>
                    <div className="flex items-center gap-1.5 text-xs lg:text-[13px] text-[#D4A359] mt-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#D4A359]" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </StaggerItem>

          {}
          <StaggerItem className="lg:col-span-3 lg:justify-self-end space-y-4">
            <div>
              <h5 className="text-lg lg:text-xl font-bold text-[#D4A359] mb-3">
                {contact.title}
              </h5>
              <div className="space-y-2.5 lg:space-y-3 text-sm lg:text-[15.5px] text-slate-200 font-medium">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-[#D4A359] shrink-0" />
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-[#D4A359] shrink-0" />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-[#D4A359] shrink-0 mt-0.5" />
                  <span>{contact.address}</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-lg lg:text-xl font-bold text-[#D4A359] mb-2.5">
                {contact.openingHoursTitle}
              </h5>
              <div className="space-y-1.5 text-sm lg:text-[15.5px] text-slate-200 font-medium">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-[#D4A359] shrink-0" />
                  <span className="whitespace-nowrap">
                    {contact.openingHours}
                  </span>
                </div>
                <p className="text-[#D4A359] text-sm lg:text-[15.5px] font-bold pl-6 mt-1.5 whitespace-nowrap">
                  {contact.closedText}
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-6 pt-3 relative z-10">
        <div className="w-full bg-[#E5B562]/80 text-[#0B0E14] font-semibold text-sm sm:text-base text-center py-4 px-4 shadow-md">
          {copyrightText}
        </div>
      </div>
    </footer>
  );
}
