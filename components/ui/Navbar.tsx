"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Get Featured", href: "/get-featured" },
    { label: "Advertise", href: "/advertise" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
        scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      )}
    >
      <Link href="/" className="flex items-center gap-2">
        <span className="font-serif-italic text-3xl font-regular tracking-wide leading-none">
          AUS
        </span>
        <span className="text-sm uppercase tracking-widest font-bold font-satoshi mt-1">
          Magazine
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm uppercase tracking-widest hover:text-gold transition-colors font-bold",
              pathname === link.href ? "text-gold" : "text-white/80"
            )}
            onClick={() => window.scrollTo(0, 0)}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link href="/get-featured">
          <Button className="h-10 px-6 text-sm">
            Get Featured
          </Button>
        </Link>
      </div>
    </nav>
  );
}
