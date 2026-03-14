"use client";
import { useEffect, useRef } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll(".fade-up");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="relative z-10 px-8 md:px-16 py-28"
      ref={sectionRef}
    >
      {/* Full-width accent line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-28" />

      <div className="max-w-3xl mx-auto text-center">
        <div className="fade-up flex items-center justify-center gap-3 mb-3">
          <span
            className="font-mono text-xs text-accent uppercase tracking-widest"
            
          >
            05 / Contact
          </span>
        </div>

        <h2
          className="fade-up font-display font-extrabold tracking-tight mb-6 text-slate-900"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: "1" }}
        >
          Got an interesting
          <br />
          <span className="text-accent">problem?</span>
        </h2>

        <p
          className="fade-up font-mono text-sm text-muted max-w-md mx-auto mb-12 leading-relaxed"
          
        >
          Whether it&apos;s a distributed system challenge, cloud architecture, or
          just a chat about tech — I&apos;m always open to interesting conversations.
        </p>

        {/* Email */}
        <a
          href="mailto:subhro.techinfo@gmail.com"
          className="fade-up font-display font-extrabold text-accent relative inline-block mb-14 group"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.8rem)",
          }}
        >
          subhro.techinfo@gmail.com
          <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </a>

        {/* CTA */}
        <div className="fade-up flex justify-center gap-4 flex-wrap mb-16">
          <a
            href="mailto:subhro.techinfo@gmail.com"
            className="btn-clip px-8 py-4 bg-accent text-bg font-display font-bold text-sm uppercase tracking-wider hover:shadow-[0_12px_40px_rgba(0,212,255,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            
          >
            Send Message
          </a>
          <a
            href="https://linkedin.com/in/subhrotechinfo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-border text-slate-800 font-display font-bold text-sm uppercase tracking-wider hover:border-accent hover:text-accent transition-all duration-200"
            
          >
            LinkedIn
          </a>
        </div>

        {/* Social links */}
        <div className="fade-up flex justify-center gap-6 flex-wrap">
          {[
            { label: "GitHub", href: "https://github.com/Subhrotechinfo" },
            { label: "LinkedIn", href: "https://linkedin.com/in/subhrotechinfo" },
            { label: "Buy Me a Coffee", href: "https://www.buymeacoffee.com/subhro" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted uppercase tracking-widest px-5 py-2.5 border border-border hover:text-accent hover:border-accent transition-all duration-200"
              
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
