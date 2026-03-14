"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#career", label: "Career" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/90 border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-display font-extrabold text-lg tracking-tight text-slate-900 hover:text-accent transition-colors"
        
      >
        SC<span className="text-accent">.</span>
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-9 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-xs text-muted uppercase tracking-widest hover:text-accent transition-colors relative group"
              
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="mailto:subhro.techinfo@gmail.com"
        className="hidden md:inline-block font-display font-bold text-xs uppercase tracking-wider px-5 py-2.5 border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-200"
        
      >
        Hire Me
      </a>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-muted hover:text-accent transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className="space-y-1.5">
          <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-4 md:hidden shadow-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm text-muted uppercase tracking-widest hover:text-accent transition-colors"
              
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
