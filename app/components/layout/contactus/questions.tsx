"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Mail, Briefcase, Phone, Pencil, ArrowRight } from "lucide-react";
import lawData from "@/app/data/lawData-restructured.json";

import { QuestionsSectionData, GlobalLawData } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultQuestionsSectionData = lawData.categories.Veritas.sections.Consultation?.variants?.VeritasConsultation1?.questionsSection;

export interface QuestionsProps {
  data?: QuestionsSectionData;
}

export function Questions({ data = defaultQuestionsSectionData }: QuestionsProps) {
  if (!data) return null;

  const { tagline, headingLine1, headingLine2, formLabels, image } = data;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", service: "", phone: "", message: "" });
  };

  return (
    <div className="w-full bg-[#0B0E14] text-white select-none">
      
      {/* 1. Questions Form Block (with background image overlay) */}
      <section className="relative w-full  mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background Image with Overlay */}
        <Image
          src={image || "/bannerbg.svg"}
          alt="Background"
          fill
          className="object-cover object-center opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-[#0B0E14]/75 backdrop-blur-[1px]" />

        <div className="max-w-4xl mx-auto relative z-10">
          
          {/* Centered Section Header matching site typography standard */}
          <FadeIn direction="up" delay={0.1} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            
            {/* Top Tagline with side lines */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-12 h-[1px] bg-[#D4A359]/60" />
              <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
                {tagline || "HAVE ANY QUESTION?"}
              </span>
              <span className="w-12 h-[1px] bg-[#D4A359]/60" />
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-2xl sm:text-2xl md:text-4xl lg:text-[50px] leading-[1.2] tracking-tight text-white mb-3">
              {headingLine1 || "Have Be Any Question?"} <br />
              <span className="text-white font-normal">{headingLine2 || "Feel Free To Contact With Us."}</span>
            </h2>

            {/* Gold Diamond Accent Divider */}
            <div className="w-14 h-[2px] bg-[#D4A359] mx-auto relative flex items-center justify-center mt-4">
              <span className="w-1.5 h-1.5 bg-[#D4A359] rotate-45 absolute" />
            </div>

          </FadeIn>

          {/* Centered Form */}
          <FadeIn direction="up" delay={0.25}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Your Name */}
                <div className="relative rounded-xl border border-slate-800/90 bg-[#060911]/90 flex items-center px-4 py-3.5 focus-within:border-[#D4A359]/60 transition-colors shadow-inner">
                  <User className="w-5 h-5 text-[#D4A359] shrink-0 mr-3" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={formLabels?.namePlaceholder || "Your Name*"}
                    className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base outline-none"
                  />
                </div>

                {/* Your Email */}
                <div className="relative rounded-xl border border-slate-800/90 bg-[#060911]/90 flex items-center px-4 py-3.5 focus-within:border-[#D4A359]/60 transition-colors shadow-inner">
                  <Mail className="w-5 h-5 text-[#D4A359] shrink-0 mr-3" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={formLabels?.emailPlaceholder || "Your Email*"}
                    className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Service Looking For & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Service Looking For */}
                <div className="relative rounded-xl border border-slate-800/90 bg-[#060911]/90 flex items-center px-4 py-3.5 focus-within:border-[#D4A359]/60 transition-colors shadow-inner">
                  <Briefcase className="w-5 h-5 text-[#D4A359] shrink-0 mr-3" />
                  <input
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder={formLabels?.servicePlaceholder || "Service Looking For?"}
                    className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base outline-none"
                  />
                </div>

                {/* Your Phone Number */}
                <div className="relative rounded-xl border border-slate-800/90 bg-[#060911]/90 flex items-center px-4 py-3.5 focus-within:border-[#D4A359]/60 transition-colors shadow-inner">
                  <Phone className="w-5 h-5 text-[#D4A359] shrink-0 mr-3" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={formLabels?.phonePlaceholder || "Your Phone Number"}
                    className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Your Message Textarea */}
              <div className="relative rounded-xl border border-slate-800/90 bg-[#060911]/90 flex items-start px-4 py-3.5 focus-within:border-[#D4A359]/60 transition-colors shadow-inner">
                <Pencil className="w-5 h-5 text-[#D4A359] shrink-0 mr-3 mt-1" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={formLabels?.messagePlaceholder || "Your Message*"}
                  className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 text-center">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#B87B1D] to-[#D4A359] hover:from-[#C88A23] hover:to-[#E3B46A] text-white font-serif font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer mx-auto"
                >
                  <span>{formLabels?.buttonText || "Submit Your Message"}</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.button>
              </div>

            </form>
          </FadeIn>
        </div>
      </section>

      {/* 2. Map Section (Clean background without image) */}
      <FadeIn direction="up" delay={0.3} className="max-w-[1400px] mx-auto w-full bg-[#0B0E14] px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 md:mt-12 lg:mt-14">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923192592!2d77.23701088488971!3d28.522404036526275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1786345160037!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            className="rounded-[20px] shadow-2xl border border-slate-800/80"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </FadeIn>

    </div>
  );
}

export default Questions;

