"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // staggered word animation
    const el = nameRef.current;
    if (!el) return;
    el.style.opacity = "1";
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-8 md:px-16 pt-28 pb-20 relative z-10"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-7 px-4 py-2 border border-accent/25 bg-accent/5"
            
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse2" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1
            ref={nameRef}
            className="font-display font-extrabold leading-none tracking-tighter mb-5 opacity-0 animate-fade-up text-slate-900"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              animationDelay: "0.1s",
              animationFillMode: "forwards",
            }}
          >
            Subhro
            <br />
            <span className="text-accent">Chatterjee</span>
          </h1>

          {/* Title */}
          <p
            className="font-mono text-base text-muted mb-6 opacity-0 animate-fade-up tracking-wide"
            style={{
              fontFamily: "'DM Mono', monospace",
              animationDelay: "0.25s",
              animationFillMode: "forwards",
            }}
          >
            {">"} Lead Developer{" "}
            <span className="text-accent2">// Backend Architect</span>
          </p>

          {/* Bio */}
          <p
            className="text-slate-600 text-base leading-relaxed max-w-lg mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Lead Developer with <span className="text-slate-900 font-medium">8+ years</span> building scalable systems across banking, payments, retail, real estate, gaming, and healthcare.
          </p>

          {/* CTA buttons */}
          <div
            className="flex gap-4 flex-wrap opacity-0 animate-fade-up"
            style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
          >
            <a
              href="#projects"
              className="btn-clip px-7 py-3.5 bg-accent text-bg font-display font-bold text-xs uppercase tracking-wider hover:shadow-[0_12px_40px_rgba(0,212,255,0.35)] hover:-translate-y-0.5 transition-all duration-200"
              
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 border border-border text-slate-800 font-display font-bold text-xs uppercase tracking-wider hover:border-accent hover:text-accent transition-all duration-200"
              
            >
              Contact Me
            </a>
          </div>

          {/* Stats row */}
          <div
            className="mt-14 flex gap-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            {[
              { num: "8+", label: "Years Exp." },
              { num: "6", label: "Industries" },
              { num: "10+", label: "Technologies" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-display font-extrabold text-3xl text-accent"
                  
                >
                  {s.num}
                </div>
                <div
                  className="font-mono text-xs text-muted tracking-wider uppercase mt-1"
                  
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual card */}
        <div className="flex justify-center items-center relative">
          <div className="relative animate-float">
            {/* Main image box */}
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              {/* Gradient border */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-accent2 img-clip"
                style={{ padding: "2px" }}
              />
              {/* Inner — Photo */}
              <div className="img-clip w-full h-full bg-surface border border-border relative overflow-hidden">
                <Image
                  src="/subhro.jpeg"
                  alt="Subhro Chatterjee"
                  fill
                  className="object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-105"
                  priority
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 to-transparent z-10" />
                {/* Name overlay */}
                <div className="absolute bottom-4 left-0 right-0 text-center z-20">
                  <span
                    className="font-mono text-xs text-accent/90 tracking-widest"
                    
                  >
                    SUBHRO CHATTERJEE
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-5 -right-8 bg-surface border border-border px-4 py-2 font-mono text-xs text-accent tracking-wider shadow-lg"
              >
              Senior SWE
            </div>
            <div className="absolute -bottom-5 -left-8 bg-surface border border-accent2/30 px-4 py-2 font-mono text-xs text-accent2 tracking-wider shadow-lg"
              >
              Microservices ⚡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
