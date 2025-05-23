import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Steelhead Electric",
  description:
    "Our expert electricians tackle every project with innovation and expertise. From simple repairs to complex installations, we're the trusted partner you need.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen flex flex-col justify-between font-sans`}
        suppressHydrationWarning
      >
        <div>
          <Navbar />
          {children}
        </div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
