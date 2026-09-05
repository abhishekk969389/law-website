"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import lawData from "@/app/data/lawData-restructured.json";

import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import { NavbarData, GlobalLawData } from "@/app/data";
import { motion, AnimatePresence } from "framer-motion";

const defaultNavbarData: NavbarData =
  lawData.categories.Veritas.sections.Header?.variants?.VeritasHeader1?.navbar;

interface NavbarProps {
  data?: NavbarData;
}

export function Navbar({ data = defaultNavbarData }: NavbarProps) {
  const { logo, navLinks, actionButtons } = data;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null,
  );
  const pathname = usePathname();

  const isPathActive = (
    linkHref: string,
    dropdownItems?: { href: string }[],
  ) => {
    if (!pathname) return false;
    if (linkHref === "/") return pathname === "/";
    if (linkHref && pathname === linkHref) return true;
    if (linkHref && linkHref !== "/" && pathname.startsWith(linkHref))
      return true;
    if (dropdownItems) {
      return dropdownItems.some(
        (item) =>
          item.href &&
          item.href !== "/" &&
          (pathname === item.href || pathname.startsWith(item.href)),
      );
    }
    return false;
  };

  const toggleMobileDropdown = (title: string) => {
    setMobileOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <header className="w-full bg-[#0B0E14] text-white border-b border-slate-800/80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
        { }
        <div className="flex items-center">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={logo}
              alt="Veritas Law Partners Logo"
              width={320}
              height={80}
              priority
              className="h-12 sm:h-14 md:h-16 lg:h-[72px] w-auto object-contain"
            />
          </Link>
          { }
          <div className="hidden sm:block h-10 md:h-12 w-[1px] bg-slate-700/70 mx-6 md:mx-8" />
        </div>

        { }
        <nav className="hidden lg:flex items-center gap-3.5 lg:gap-4 xl:gap-7 2xl:gap-9 text-sm lg:text-[13.5px] xl:text-[15px] font-medium tracking-wide">
          {navLinks.map((link: any, idx: any) => {
            const isActive = isPathActive(link.href, link.dropdownItems);
            const hasDropdown = link.hasDropdown;
            const isDropdownOpen = activeDropdown === link.title;

            return (
              <div
                key={idx}
                className="relative py-2 group"
                onMouseEnter={() =>
                  hasDropdown && setActiveDropdown(link.title)
                }
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                {hasDropdown ? (
                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className={`relative flex items-center gap-1 transition-colors duration-200 py-1 cursor-default outline-none ${isActive
                        ? "text-[#D4A359] font-medium"
                        : "text-white/90 hover:text-[#D4A359]"
                      }`}
                  >
                    <span>{link.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 group-hover:text-[#D4A359] transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-[#D4A359]" : ""}`}
                    />
                    {isActive && (
                      <span className="absolute left-0 right-0 -bottom-1 h-[2.5px] bg-[#D4A359] rounded-full" />
                    )}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative flex items-center gap-1 transition-colors duration-200 py-1 ${isActive
                        ? "text-[#D4A359] font-medium"
                        : "text-white/90 hover:text-[#D4A359]"
                      }`}
                  >
                    <span>{link.title}</span>
                    {isActive && (
                      <span className="absolute left-0 right-0 -bottom-1 h-[2.5px] bg-[#D4A359] rounded-full" />
                    )}
                  </Link>
                )}

                <AnimatePresence>
                  {hasDropdown && link.dropdownItems && isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 top-full mt-2 w-60 bg-[#0F141D] border border-slate-800 rounded-xl shadow-2xl py-2 z-50 overflow-hidden"
                    >
                      {link.dropdownItems.map((dropItem: any, dropIdx: any) => (
                        <Link
                          key={dropIdx}
                          href={dropItem.href}
                          className="block px-4 py-2.5 text-sm text-slate-300 hover:text-[#D4A359] hover:bg-slate-800/50 transition-colors"
                        >
                          {dropItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2 xl:gap-3.5">
          {actionButtons?.contactUs && (
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={actionButtons.contactUs.href}
                className="border border-[#D4A359] text-white hover:bg-[#D4A359]/10 px-3 py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-3.5 rounded-lg flex items-center gap-1.5 text-sm xl:text-sm font-medium transition-all duration-200 shrink-0"
              >
                <span>{actionButtons.contactUs.text}</span>
                <ArrowUpRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#D4A359]" />
              </Link>
            </motion.div>
          )}

          {actionButtons?.consultation && (
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={actionButtons.consultation.href}
                className="bg-[#E5B562] hover:bg-[#D4A359] text-[#0B0E14] font-medium px-3 py-2 lg:px-3.5 lg:py-2.5 xl:px-4 xl:py-3.5 rounded-lg text-sm xl:text-sm transition-all duration-200 shadow-sm shrink-0"
              >
                {actionButtons.consultation.text}
              </Link>
            </motion.div>
          )}
        </div>

        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-200 hover:text-white rounded-lg focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#D4A359]" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            data-lenis-prevent
            data-lenis-prevent-touch
            className="lg:hidden bg-[#0B0E14] border-b border-slate-800 px-5 pt-3 pb-6 space-y-4 max-h-[calc(100vh-90px)] overflow-y-auto shadow-2xl z-50 overscroll-contain touch-pan-y"
          >
          

            <div className="flex flex-col space-y-2">
              {navLinks.map((link: any, idx: any) => {
                const linkIsActive = isPathActive(
                  link.href,
                  link.dropdownItems,
                );
                const isMobileDropdownOpen = mobileOpenDropdown === link.title;

                return (
                  <div key={idx} className="flex flex-col">
                    {link.hasDropdown ? (
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(link.title)}
                        className={`py-2.5 text-base font-medium flex items-center justify-between w-full text-left transition-colors cursor-pointer ${linkIsActive
                            ? "text-[#D4A359]"
                            : "text-slate-200 hover:text-[#D4A359]"
                          }`}
                      >
                        <span>{link.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isMobileDropdownOpen ? "rotate-180 text-[#D4A359]" : ""}`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`py-2.5 text-base font-medium flex items-center justify-between ${linkIsActive
                            ? "text-[#D4A359]"
                            : "text-slate-200 hover:text-[#D4A359]"
                          }`}
                      >
                        <span>{link.title}</span>
                      </Link>
                    )}

                    <AnimatePresence>
                      {link.hasDropdown &&
                        link.dropdownItems &&
                        isMobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="pl-4 space-y-1.5 border-l border-slate-800/80 ml-2 py-1 overflow-hidden"
                          >
                            {link.dropdownItems.map(
                              (dropItem: any, dropIdx: any) => (
                                <Link
                                  key={dropIdx}
                                  href={dropItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block text-sm text-slate-400 hover:text-[#D4A359] py-1.5 transition-colors"
                                >
                                  {dropItem.title}
                                </Link>
                              ),
                            )}
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-3">
              {actionButtons?.contactUs && (
                <Link
                  href={actionButtons.contactUs.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center border border-[#D4A359] text-white py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium"
                >
                  <span>{actionButtons.contactUs.text}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D4A359]" />
                </Link>
              )}

              {actionButtons?.consultation && (
                <Link
                  href={actionButtons.consultation.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-[#E5B562] text-[#0B0E14] font-semibold py-2.5 rounded-lg text-sm"
                >
                  {actionButtons.consultation.text}
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
