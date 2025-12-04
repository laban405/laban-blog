"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function ProdmastHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Settings2 className="h-6 w-6 text-[#2DD4BF]" />
          <span className="text-xl font-bold text-gray-900">Prodmast</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#2DD4BF] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          className="bg-[#0F766E] hover:bg-[#0F766E]/90 text-white"
          size="default"
        >
          Sign Up
        </Button>
      </div>
    </header>
  );
}

