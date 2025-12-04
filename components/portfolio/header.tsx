"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function PortfolioHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/95">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center space-x-2">
                    <Code className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold text-foreground">
                        Portfolio
                    </span>
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <Button size="default">
                        Hire Me
                    </Button>
                </div>
            </div>
        </header>
    );
}

