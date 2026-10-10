
"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4DED3] bg-[#F8F7F3]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="max-w-[230px]">
          <span className="block font-serif text-xl font-semibold tracking-tight">
            Dr. Maya Reynolds
          </span>
          <span className="text-xs tracking-wide text-[#64756B]">
            PSYCHOLOGIST · SANTA MONICA, CA
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition hover:text-[#718B78]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[#35564A] px-5 py-3 text-sm text-white transition hover:bg-[#263F35]"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-[#D8DED6] px-3 py-2 text-sm md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#E4DED3] px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm hover:text-[#718B78]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-[#35564A] px-5 py-3 text-center text-sm text-white"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
