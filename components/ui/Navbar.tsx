"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          const mostVisible = visibleSections.reduce((prev, current) => {
            return prev.intersectionRatio > current.intersectionRatio
              ? prev
              : current;
          });
          setActiveSection(mostVisible.target.id);
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -80px 0px" },
    );

    NAV_ITEMS.forEach(({ href }) => {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200 font-mono text-sm border-b",
          isScrolled
            ? "bg-bg-deep border-systems/30 shadow-[0_0_15px_rgba(57,255,20,0.05)]"
            : "bg-bg-deep/90 backdrop-blur-md border-border-subtle",
        )}
      >
        <div className="max-w-content mx-auto px-4 h-12 flex items-center justify-between">
          {/* Logo / Hostname */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Terminal
              size={16}
              className="text-systems group-hover:animate-pulse"
            />
            <span className="font-bold tracking-tight flex items-center">
              <span className="text-systems">badnikhil</span>
              <span className="text-text-muted">@</span>
              <span className="text-flutter">tty1</span>
              <span className="text-text-muted hidden sm:inline ml-1">:~</span>
              <span className="text-text-primary ml-1">$</span>
            </span>
            <span className="w-2 h-4 bg-systems animate-blink ml-1" />
          </Link>

          {/* Desktop Nav - Tmux Status Bar Style */}
          <nav className="hidden md:flex items-center gap-1 overflow-x-auto min-w-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {NAV_ITEMS.map(({ label, href }, index) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              const formattedLabel = label.toLowerCase().replace(" ", "-");

              return (
                <a
                  key={label}
                  href={href}
                  className={cn(
                    "px-3 py-1 transition-colors flex items-center gap-2 shrink-0",
                    isActive
                      ? "bg-systems text-bg-deep font-bold"
                      : "text-text-secondary hover:text-systems hover:bg-systems/10",
                  )}
                >
                  <span
                    className={cn(
                      "text-xs opacity-50",
                      isActive ? "text-bg-deep" : "text-text-muted",
                    )}
                  >
                    {index}:
                  </span>
                  {formattedLabel}
                </a>
              );
            })}

            <div className="w-px h-4 bg-border-bright mx-3 shrink-0" />

            <a
              href={SITE_CONFIG.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-bg-raised text-systems border border-systems/30 hover:bg-systems hover:text-bg-deep transition-all flex items-center gap-2 font-bold shrink-0"
            >
              ./resume.sh
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center gap-2 text-systems hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            [ <Menu size={16} /> ]
          </button>
        </div>
      </header>

      {/* Mobile Terminal Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-bg-deep font-mono">
          <div className="p-4 border-b border-systems/30 flex justify-between items-center bg-bg-surface">
            <div className="flex items-center gap-2 text-systems font-bold">
              <Terminal size={16} />
              <span>tty1 - root</span>
            </div>
            <button
              className="text-text-muted hover:text-systems flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              [ <X size={16} /> ESC ]
            </button>
          </div>

          <div className="p-6">
            <p className="text-text-muted mb-6">
              <span className="text-systems font-bold">badnikhil@tty1</span>:
              <span className="text-flutter">~</span>$ ls -la /nav
            </p>

            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map(({ label, href }) => {
                const id = href.replace("#", "");
                const isActive = activeSection === id;
                const formattedLabel = label.toLowerCase().replace(" ", "-");

                return (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-sm sm:text-base flex items-center gap-4 transition-colors",
                      isActive
                        ? "text-systems font-bold"
                        : "text-text-secondary hover:text-text-primary",
                    )}
                  >
                    <span
                      className={cn(
                        "w-4 text-center",
                        isActive ? "text-systems" : "text-transparent",
                      )}
                    >
                      *
                    </span>
                    <span className="text-flutter opacity-80 hidden xs:inline">
                      drwxr-xr-x
                    </span>
                    <span>{formattedLabel}/</span>
                  </a>
                );
              })}

              <div className="h-px bg-border-subtle my-2 ml-8" />

              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm sm:text-base flex items-center gap-4 text-gold hover:text-yellow-300 transition-colors"
              >
                <span className="w-4 text-transparent">*</span>
                <span className="text-systems opacity-80 hidden xs:inline">
                  -rwxr-xr-x
                </span>
                <span className="font-bold">resume.sh</span>
              </a>
            </nav>

            <div className="mt-10 flex items-center gap-2 text-systems text-sm sm:text-base">
              <span className="font-bold">badnikhil@tty1</span>
              <span className="text-text-muted">:</span>
              <span className="text-flutter">/nav</span>
              <span className="text-text-primary">$</span>
              <span className="w-2.5 h-5 bg-systems animate-blink" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
