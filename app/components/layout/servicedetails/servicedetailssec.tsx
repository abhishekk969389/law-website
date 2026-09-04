"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Scale,
  ShieldCheck,
  ClipboardCheck,
  DollarSign,
  Search,
  Handshake,
  Gavel,
  TrendingUp,
  PhoneCall,
  Mail,
  MapPin,
  ChevronRight,
  Check,
  Car,
  Coins,
  Shield,
  FileText,
  Building2,
  Users,
  Briefcase,
  LucideIcon,
} from "lucide-react";
import { ServiceDetailItem } from "@/app/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  car: Car,
  scale: Scale,
  shield: Shield,
  "file-text": FileText,
  filetext: FileText,
  building: Building2,
  users: Users,
  briefcase: Briefcase,
  handshake: Handshake,
  handcuffs: Handshake,
  "dollar-sign": DollarSign,
  "shield-check": ShieldCheck,
  "clipboard-check": ClipboardCheck,
  search: Search,
  gavel: Gavel,
  "trending-up": TrendingUp,
  coins: Coins,
};

export interface ServiceDetailsSecProps {
  service: ServiceDetailItem;
}

export function ServiceDetailsSec({ service }: ServiceDetailsSecProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!service) return null;

  const {
    title,
    subtitle,
    headerImage,
    highlights,
    about,
    approach,
    sidebarContact,
    sidebarForm,
    icon,
  } = service;

  const MainIcon = (icon && iconMap[icon.toLowerCase()]) || Scale;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section className="max-w-[1400px] mx-auto relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 select-none px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Column (Main Content) & Right Column (Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* LEFT COLUMN: Main Content Area */}
          <div className="lg:col-span-8 space-y-8 md:space-y-10">

            {/* HERO / HEADER CARD */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-[#070A11] rounded-2xl relative overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">

                  {/* Left Side Header Text & Highlights */}
                  <div className="md:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Dynamic Direct Gold Service Icon */}
                      <div className="flex items-center gap-2 mb-3 text-[#D4A359]">
                        <MainIcon className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.5]" />
                      </div>

                      {/* Service Title */}
                      <h1 className="font-serif text-2xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight font-medium text-white tracking-tight">
                        <span>{title.line1}</span>
                        <span className="block text-[#D4A359] italic font-serif mt-1">
                          {title.line2}
                        </span>
                      </h1>

                      {/* Decorative Gold Scale Divider (Stretching Full Width) */}
                      <div className="flex items-center gap-4 my-5 w-full">
                        <span className="flex-1 h-[1px] bg-[#D4A359]/50" />
                        <Scale className="w-5 h-5 text-[#D4A359] shrink-0 stroke-[1.75]" />
                        <span className="flex-1 h-[1px] bg-[#D4A359]/50" />
                      </div>

                      {/* Subtitle / Description */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                        {subtitle}
                      </p>
                    </div>

                    {/* 3 Highlights Badges Row */}
                    {highlights && highlights.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-800/80 pt-6 mt-2">
                        {highlights.map((item: any, idx: any) => {
                          const HighlightIcon = iconMap[item.icon] || ShieldCheck;
                          return (
                            <div
                              key={item.id || idx}
                              className="flex flex-col items-center text-center px-1 border-r last:border-r-0 border-slate-800/80"
                            >
                              <HighlightIcon className="w-8 h-8 md:w-10 md:h-10 text-[#D4A359] mb-3 stroke-[1.75]" />
                              <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug max-w-[130px]">
                                {item.title}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Right Side Header Image inside Gold Ornamental Frame */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-[390px] md:max-w-none h-[280px] sm:h-[340px] md:h-[380px] lg:h-[500px] rounded-xl bg-[#090D16] group shadow-2xl">
                       {/* Image Container */}
                      <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-900">
                        <Image src={headerImage || "/service1.svg"}
                          alt={`${title.line1} ${title.line2}`}
                          fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>

            {/* ABOUT THIS SERVICE SECTION */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-[#040F13] border border-slate-800/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">

                {/* Section Heading */}
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3">
                    {about.title}
                      <div className="w-18 h-[2px] bg-[#D4A359]" />
                  </h2>
                          
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {about.description}
                  </p>
                </div>

                {/* 4 Process Cards Grid */}
                {about.processes && about.processes.length > 0 && (
                  <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-4">
                    {about.processes.map((proc: any) => {
                      const ProcIcon = iconMap[proc.icon] || Search;
                      return (
                        <StaggerItem key={proc.id}>
                          <motion.div
                            whileHover={{ y: -4 }}
                            className="bg-[#071214] border border-slate-800/80 hover:border-[#D4A359]/50 rounded-xl p-5 transition-colors duration-300 h-full flex flex-col items-center text-center group"
                          >
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#090D16] border border-[#D4A359]/45 flex items-center justify-center text-[#D4A359] mb-4 group-hover:scale-110 transition-transform shadow-inner">
                              <ProcIcon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
                            </div>
                            <h3 className="font-serif text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-[#D4A359] transition-colors">
                              {proc.title}
                            </h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                              {proc.description}
                            </p>
                          </motion.div>
                        </StaggerItem>
                      );
                    })}
                  </StaggerContainer>
                )}

                {/* OUR APPROACH SUB-SECTION */}
                {approach && (
                  <div className="pt-6 border-t border-slate-800/80 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

                      {/* Left Lady Justice / Approach Image */}
                      <div className="md:col-span-5 relative w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-xl overflow-hidden border border-slate-800 shadow-lg">
                        <Image src={approach.image || "/about-img.svg"}
                          alt={approach.title}
                          fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>

                      {/* Right Text & Checklist */}
                      <div className="md:col-span-7 space-y-4">
                        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                          {approach.title}
                                     <div className="w-18 h-[2px] bg-[#D4A359]" />
                        </h3>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {approach.description}
                        </p>

                        {approach.benefits && approach.benefits.length > 0 && (
                          <ul className="space-y-2.5 pt-2">
                            {approach.benefits.map((benefit: any, idx: any) => (
                              <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                                <div className="w-6 h-6 rounded-full border border-[#D99A28] flex items-center justify-center shrink-0">
                                  <Check className="w-4 h-4 text-[#D99A28]" />
                                </div>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                    </div>
                  </div>
                )}

              </div>
            </FadeIn>

          </div>

          {/* RIGHT COLUMN: Sidebar (Contact Info & Get In Touch Form) */}
          <div className="lg:col-span-4 space-y-6">

            {/* CONTACT INFO WIDGET */}
            {sidebarContact && (
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-[#040F13] border border-slate-800/90 rounded-2xl p-6 shadow-xl space-y-5">
                  <div>
                    <h3 className=" text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1.5">
                      {sidebarContact.title}
                    </h3>
           <div className="w-18 h-[2px] bg-[#D4A359]" />
                  </div>

                  <div className="space-y-4 pt-1">
                    {/* Phone */}
                    {sidebarContact.phone && (
                      <div className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-full bg-[#0D121F] border border-[#D4A359]/30 flex items-center justify-center text-[#D4A359] shrink-0 mt-0.5">
                          <PhoneCall className="w-4 h-4 stroke-[1.75]" />
                        </div>
                        <div>
                          <p className="text-slate-400 text-md font-medium">
                            {sidebarContact.phone.label}
                          </p>
                          <a
                            href={sidebarContact.phone.href || `tel:${sidebarContact.phone.value}`}
                            className="text-white text-sm font-semibold hover:text-[#D4A359] transition-colors"
                          >
                            {sidebarContact.phone.value}
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Email */}
                    {sidebarContact.email && (
                      <div className="flex items-start gap-3.5 border-t border-slate-800/60 pt-4">
                        <div className="w-10 h-10 rounded-full bg-[#0D121F] border border-[#D4A359]/30 flex items-center justify-center text-[#D4A359] shrink-0 mt-0.5">
                          <Mail className="w-4 h-4 stroke-[1.75]" />
                        </div>
                        <div>
                          <p className="text-slate-400 text-md font-medium">
                            {sidebarContact.email.label}
                          </p>
                          <a
                            href={sidebarContact.email.href || `mailto:${sidebarContact.email.value}`}
                            className="text-white text-sm font-semibold hover:text-[#D4A359] transition-colors"
                          >
                            {sidebarContact.email.value}
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Location */}
                    {sidebarContact.location && (
                      <div className="flex items-start gap-3.5 border-t border-slate-800/60 pt-4">
                        <div className="w-10 h-10 rounded-full bg-[#0D121F] border border-[#D4A359]/30 flex items-center justify-center text-[#D4A359] shrink-0 mt-0.5">
                          <MapPin className="w-4 h-4 stroke-[1.75]" />
                        </div>
                        <div>
                          <p className="text-slate-400 text-md font-medium">
                            {sidebarContact.location.label}
                          </p>
                          <p className="text-white text-sm font-semibold">
                            {sidebarContact.location.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* GET IN TOUCH FORM WIDGET */}
            {sidebarForm && (
              <FadeIn direction="left" delay={0.3}>
                <div className="bg-[#040F13] border border-slate-800/90 rounded-2xl p-6 shadow-xl space-y-5">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1.5">
                      {sidebarForm.title}
                    </h3>
                    <div className="w-9 h-[2px] bg-[#D4A359]" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <input  
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={sidebarForm.namePlaceholder || "Your Full Name"}
                        className="w-full bg-[#0D121F] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4A359] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={sidebarForm.emailPlaceholder || "Email Address"}
                        className="w-full bg-[#0D121F] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4A359] transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={sidebarForm.messagePlaceholder || "Additional Message"}
                        className="w-full bg-[#0D121F] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4A359] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#D4A359] via-[#C99A2E] to-[#B8860B] text-slate-950 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm transition-all duration-300 shadow-lg cursor-pointer hover:brightness-110"
                    >
                      <span>{sidebarForm.buttonText || "Get In Touch"}</span>
                      <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                    </motion.button>
                  </form>
                </div>
              </FadeIn>
            )}

          </div>

        </div>
    </section>
  );
}

export default ServiceDetailsSec;
