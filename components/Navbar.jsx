"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = ["hero", "services", "why-us", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    // { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 font-bold text-xl">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          <span className="text-2xl font-extrabold">Steelhead Electric</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition ${
                activeSection === link.href.slice(1)
                  ? "text-orange-600 font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
              style={{ cursor: 'url("/bolt.png") 16 16, auto' }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition font-medium text-sm"
            style={{ cursor: 'url("/bolt.png") 16 16, auto' }}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-md px-6 pb-4 shadow-md">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium ${
                  activeSection === link.href.slice(1)
                    ? "text-orange-600 font-semibold"
                    : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
                style={{ cursor: 'url("/bolt.png") 16 16, auto' }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="w-full text-center bg-orange-500 text-white py-3 rounded-md font-semibold shadow hover:bg-orange-600 transition"
              onClick={() => setIsOpen(false)}
              style={{ cursor: 'url("/bolt.png") 16 16, auto' }}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
