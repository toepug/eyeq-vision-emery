"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/eyewear", label: "Eyewear" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-sm shadow-sm"
          : "bg-paper/0"
      }`}
    >
      {/* Top contact strip */}
      <div className="hidden md:flex items-center justify-end gap-6 bg-ink text-paper/80 text-xs px-6 lg:px-8 h-9">
        <a
          href="tel:4167448868"
          className="flex items-center gap-1.5 hover:text-teal transition-colors"
        >
          <Phone size={12} />
          (416) 744-8868
        </a>
        <span className="text-paper/30">|</span>
        <span>Mon–Sat 11am–7pm · Sun Closed</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="EyeQ Vision Emery"
              width={140}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink/70 hover:text-teal-dark transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-1 px-5 py-2.5 bg-teal text-ink text-sm font-bold rounded-md hover:bg-teal-dark hover:text-paper transition-colors duration-200"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-paper border-t border-ink/10 transition-all duration-300 overflow-hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-semibold text-ink border-b border-ink/10 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 px-5 py-3 bg-teal text-ink text-sm font-bold rounded-md text-center"
          >
            Book Now
          </Link>
          <a
            href="tel:4167448868"
            className="mt-2 px-5 py-3 border border-ink/20 text-ink text-sm font-semibold rounded-md text-center"
          >
            Call (416) 744-8868
          </a>
        </nav>
      </div>
    </header>
  );
}
