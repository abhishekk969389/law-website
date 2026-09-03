"use client";

import React from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import lawData from "@/app/data/lawData-restructured.json";

import { ContactSectionData, GlobalLawData } from "@/app/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultContactSectionData = lawData.categories.Veritas.sections.Contact?.variants?.VeritasContact1?.contactSection;

export interface ContactsecProps {
  data?: ContactSectionData;
}

export function Contactsec({ data = defaultContactSectionData }: ContactsecProps) {
  if (!data) return null;

  const { tagline, heading, visitUs, officeHours, contactInfo } = data;

  return (
    <section className="max-w-[1400px] mx-auto relative w-full bg-[#0B0E14] text-white  mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
  
        
        {/* Centered Section Header matching site typography standard */}
        <FadeIn direction="up" delay={0.1} className="text-center max-w-3xl mx-auto mb-8">
          
          {/* Top Tagline with side lines */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-12 h-[1px] bg-[#D4A359]/60" />
            <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
              {tagline || "OUR CONTACTS"}
            </span>
            <span className="w-12 h-[1px] bg-[#D4A359]/60" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-2xl sm:text-2xl md:text-4xl lg:text-[50px] leading-[1.2] tracking-tight text-white mb-3">
            {heading || "We're Here To Help You"}
          </h2>

          {/* Gold Diamond Accent Divider */}
          <div className="w-14 h-[2px] bg-[#D4A359] mx-auto relative flex items-center justify-center mt-4">
            <span className="w-1.5 h-1.5 bg-[#D4A359] rotate-45 absolute" />
          </div>

        </FadeIn>

        {/* 3 Contact Info Cards Grid */}
        <StaggerContainer staggerChildren={0.12} delayChildren={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Visit Us */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] p-8 sm:p-10 flex flex-col items-center text-center hover:border-[#D4A359]/50 transition-colors duration-300 shadow-xl min-h-[360px] justify-start h-full cursor-pointer"
            >
              
              {/* Gold Map Pin Circle Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 6 }}
                className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-[#D4A359]/60 flex items-center justify-center bg-[#070B12] text-[#D4A359] mb-5 shrink-0 shadow-[0_0_15px_rgba(212,163,89,0.15)] group-hover:scale-105 transition-transform"
              >
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4A359]" />
              </motion.div>

              {/* Title */}
              <h3 className="font-serif font-semibold text-white text-xl sm:text-2xl mb-2">
                {visitUs?.title || "Visit Us"}
              </h3>

              {/* Gold Accent Underline */}
              <span className="w-8 h-[1px] bg-[#D4A359]/60 mb-6" />

              {/* Address Lines */}
              <div className="space-y-1 text-slate-300 text-sm sm:text-base leading-relaxed">
                {visitUs?.addressLines &&
                  visitUs.addressLines.map((line: any, idx: any) => (
                    <p key={idx}>{line}</p>
                  ))}
              </div>

            </motion.div>
          </StaggerItem>

          {/* Card 2: Office Hours */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] p-8 sm:p-10 flex flex-col items-center text-center hover:border-[#D4A359]/50 transition-colors duration-300 shadow-xl min-h-[360px] justify-start h-full cursor-pointer"
            >
              
              {/* Gold Clock Circle Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 6 }}
                className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-[#D4A359]/60 flex items-center justify-center bg-[#070B12] text-[#D4A359] mb-5 shrink-0 shadow-[0_0_15px_rgba(212,163,89,0.15)] group-hover:scale-105 transition-transform"
              >
                <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4A359]" />
              </motion.div>

              {/* Title */}
              <h3 className="font-serif font-semibold text-white text-xl sm:text-2xl mb-2">
                {officeHours?.title || "Office Hours"}
              </h3>

              {/* Gold Accent Underline */}
              <span className="w-8 h-[1px] bg-[#D4A359]/60 mb-6" />

              {/* Hours Items */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed w-full">
                {officeHours?.items &&
                  officeHours.items.map((item: any, idx: any) => (
                    <div key={idx}>
                      <p className="text-slate-400 text-xs sm:text-sm font-medium">{item.days}</p>
                      <p className={item.isClosed ? "text-[#D4A359] font-medium" : "text-white font-medium"}>
                        {item.time}
                      </p>
                    </div>
                  ))}
              </div>

            </motion.div>
          </StaggerItem>

          {/* Card 3: Call Us & Email Us */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] p-8 sm:p-10 flex flex-col items-center text-center hover:border-[#D4A359]/50 transition-colors duration-300 shadow-xl min-h-[360px] justify-start h-full cursor-pointer"
            >
              
              {/* Gold Phone Circle Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 6 }}
                className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-[#D4A359]/60 flex items-center justify-center bg-[#070B12] text-[#D4A359] mb-5 shrink-0 shadow-[0_0_15px_rgba(212,163,89,0.15)] group-hover:scale-105 transition-transform"
              >
                <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4A359]" />
              </motion.div>

              {/* Call Us Section */}
              <h3 className="font-serif font-semibold text-white text-xl sm:text-2xl mb-2">
                {contactInfo?.callTitle || "Call Us"}
              </h3>

              {/* Gold Accent Underline */}
              <span className="w-8 h-[1px] bg-[#D4A359]/60 mb-4" />

              <div className="space-y-1 text-slate-300 text-sm sm:text-base mb-6">
                {contactInfo?.phones &&
                  contactInfo.phones.map((phone: any, idx: any) => (
                    <a
                      key={idx}
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="block text-white hover:text-[#D4A359] transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
              </div>

              {/* Email Us Section */}
              <div className="pt-2 border-t border-slate-800/60 w-full flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-[#D4A359]/40 flex items-center justify-center bg-[#070B12] text-[#D4A359] my-3 shrink-0">
                  <Mail className="w-5 h-5 text-[#D4A359]" />
                </div>

                <h4 className="font-serif font-semibold text-white text-lg sm:text-xl mb-1">
                  {contactInfo?.emailTitle || "Email Us"}
                </h4>

                <span className="w-6 h-[1px] bg-[#D4A359]/60 mb-3" />

                <div className="space-y-1 text-slate-300 text-sm sm:text-base">
                  {contactInfo?.emails &&
                    contactInfo.emails.map((email: any, idx: any) => (
                      <a
                        key={idx}
                        href={`mailto:${email}`}
                        className="block text-white hover:text-[#D4A359] hover:underline transition-colors"
                      >
                        {email}
                      </a>
                    ))}
                </div>
              </div>

            </motion.div>
          </StaggerItem>

        </StaggerContainer>
    </section>
  );
}

export default Contactsec;

