"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const primaryLinks = [
  { href: "/economy", label: "Economy" },
  { href: "/population", label: "Population" },
  { href: "/states", label: "States" },
  { href: "/health", label: "Health" },
  { href: "/india-vs-world", label: "India vs world" },
  { href: "/agriculture", label: "Agriculture" },
];

const resourceLinks = [
  { href: "/glossary", label: "Glossary" },
  { href: "/visualizations", label: "Visualizations" },
  { href: "/tools", label: "Tools" },
  { href: "/articles", label: "All Articles" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = () => setResourcesOpen(false);
    if (resourcesOpen) {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [resourcesOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-[#E8E5E0]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-[#1A1A2E] hover:text-[#C8794A] transition-colors"
        >
          DataIndia
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-[#4A4A5E]">
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-[#1A4A42] transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}

          {/* Resources dropdown */}
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center gap-1 hover:text-[#1A4A42] transition-colors duration-200"
              aria-expanded={resourcesOpen}
            >
              Resources
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  resourcesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {resourcesOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-[#F0EDE8] rounded-xl shadow-lg py-2">
                {resourceLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setResourcesOpen(false)}
                    className="block px-4 py-2 text-sm text-[#4A4A5E] hover:bg-[#F9F7F4] hover:text-[#1A4A42] transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-[#1A1A2E] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-[#1A1A2E] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-[#1A1A2E] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-[#E8E5E0] transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1 text-sm text-[#4A4A5E]">
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-2 hover:text-[#1A4A42] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          <div className="pt-3 mt-2 border-t border-[#E8E5E0]">
            <p className="text-[10px] uppercase tracking-widest text-[#8A8A9E] mb-2">
              Resources
            </p>
            {resourceLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-2 hover:text-[#1A4A42] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E8E5E0] text-xs text-[#8A8A9E]">
            by ConnectSangam
          </div>
        </div>
      </div>
    </header>
  );
}