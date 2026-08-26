import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Topbar } from "@/app/components/ui/topbar";
import { Navbar } from "@/app/components/ui/navbar";
import Footer from "@/app/components/ui/footer";
import SmoothScroll from "./components/ui/smoothscroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veritas Law Partners",
  description: "Veritas Law Partners For Law Website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <div className="sticky top-0 z-50 w-full flex flex-col">
            <Topbar />
            <Navbar />
          </div>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
