"use client";
import { useEffect, useRef } from "react";

export default function About() {
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
      id="about"
      className="relative z-10 px-8 md:px-16 py-28 max-w-6xl mx-auto"
      ref={sectionRef}
    >
      <div className="fade-up flex items-center gap-3 mb-3">
        <span
          className="font-mono text-xs text-accent uppercase tracking-widest"
          
        >
          01 / About
        </span>
        <div className="w-12 h-px bg-accent/40" />
      </div>

      <h2
        className="fade-up font-display font-extrabold tracking-tight mb-16 text-slate-900"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        Let me introduce <span className="text-accent">myself.</span>
      </h2>

      <div className="grid md:grid-cols-5 gap-16 items-start">
        {/* Text — wider */}
        <div className="md:col-span-3 space-y-6">
          <p className="fade-up text-slate-600 text-base leading-relaxed">
            My journey in software engineering started with a curiosity about how systems work behind the scenes — how a simple user action on a screen can trigger complex processes across servers, databases, and services. That curiosity quickly grew into a career where I've spent over{" "}
            <span className="text-slate-900 font-semibold">8 years building scalable software</span>{" "}
            and leading engineering initiatives.
          </p>
          <p className="fade-up text-slate-600 text-base leading-relaxed">
            Throughout my career, I've worked across industries such as{" "}
            <span className="text-slate-900 font-semibold">banking, payments, retail, real estate, gaming, and healthcare</span>,
            building products used by thousands of users. I started as a backend developer, designing APIs and building server-side systems using Node.js and cloud technologies. Over time, I grew into a{" "}
            <span className="text-accent font-semibold">Lead Developer role</span>, where I guide architecture decisions, mentor developers, and lead the development of complex, high-impact systems.
          </p>
          <p className="fade-up text-slate-600 text-base leading-relaxed">
            What excites me most about technology is solving complex problems and turning ideas into reliable, scalable systems. I enjoy working on{" "}
            <span className="text-slate-900 font-semibold">high-performance backend architectures, cloud-native applications,</span>{" "}
            and modern web platforms using technologies like TypeScript, Node.js, React, PostgreSQL, MongoDB, and AWS.
          </p>
          <p className="fade-up text-slate-600 text-base leading-relaxed">
            As a Lead Developer, I focus on writing clean, maintainable code while also helping teams deliver high-quality software efficiently. I believe great software is built through{" "}
            <span className="text-accent font-semibold">strong collaboration, thoughtful architecture, and continuous improvement.</span>
          </p>

          {/* Quick facts */}
          <div className="fade-up grid grid-cols-2 gap-3 pt-4">
            {[
              { label: "Location", value: "Bengaluru, India" },
              { label: "Role", value: "Lead Developer" },
              { label: "Experience", value: "8+ Years" },
              { label: "Education", value: "MCA — SRM University" },
            ].map((f) => (
              <div key={f.label} className="bg-surface border border-border p-4">
                <div
                  className="font-mono text-xs text-muted uppercase tracking-wider mb-1"
                  
                >
                  {f.label}
                </div>
                <div
                  className="font-display font-semibold text-sm text-slate-900"
                  
                >
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side panel */}
        <div className="md:col-span-2 space-y-4">
          {/* Architecture philosophy */}
          <div className="fade-up bg-surface border border-border p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/20" />
            <div
              className="font-mono text-xs text-accent uppercase tracking-widest mb-4"
              
            >
              Architecture
            </div>
            <pre
              className="font-mono text-xs text-slate-400 leading-relaxed overflow-x-auto"
              
            >
{`Client → Next.js
    ↓
NestJS API
    ↓
MongoDB / SQL
    ↓
RabbitMQ ↔ Workers
    ↓
Redis Cache
    ↓
AWS / K8s
    ↓
Grafana + Prometheus`}
            </pre>
          </div>

          {/* Currently */}
          <div className="fade-up bg-surface border border-border p-6">
            <div
              className="font-mono text-xs text-muted uppercase tracking-widest mb-3"
              
            >
              Currently
            </div>
            <ul className="space-y-2">
              {[
                "Building production microservices",
                "Exploring advanced K8s patterns",
                "Improving system observability",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <span className="text-accent mt-0.5 text-xs">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
