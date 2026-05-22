"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CS</span>
          </div>
          <span className="font-bold text-primary text-lg leading-tight">
            C. Sitaula{" "}
            <span className="text-accent">&amp;</span>{" "}
            Associates
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors text-sm ${
                pathname === link.href
                  ? "text-accent"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
          >
            Book Consultation
          </Link>
        </nav>

        <button
          className="md:hidden text-gray-600 hover:text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium py-1.5 ${
                pathname === link.href ? "text-accent" : "text-gray-700"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent text-white text-center px-5 py-2.5 rounded-lg font-semibold mt-1"
            onClick={() => setMenuOpen(false)}
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
