"use client";
import { useEffect, useRef } from "react";

const skillCategories = [
  {
    icon: "⚙️",
    label: "Backend",
    skills: ["NestJS", "Node.js", "TypeScript", "REST APIs", "GraphQL"],
  },
  {
    icon: "🎨",
    label: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: "🗄️",
    label: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "SQL"],
  },
  {
    icon: "☁️",
    label: "Cloud & Infra",
    skills: ["AWS", "Docker", "Kubernetes", "RabbitMQ", "ArgoCD"],
  },
  {
    icon: "📊",
    label: "Observability",
    skills: ["Grafana", "Prometheus", "Logging", "Tracing"],
  },
  {
    icon: "🚀",
    label: "CI/CD & DevOps",
    skills: ["GitHub Actions", "ArgoCD", "Git", "Linux"],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".fade-up");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative z-10 px-8 md:px-16 py-28 max-w-6xl mx-auto" ref={sectionRef}>
      {/* Section label */}
      <div className="fade-up flex items-center gap-3 mb-3">
        <span
          className="font-mono text-xs text-accent uppercase tracking-widest"
          
        >
          02 / Skills
        </span>
        <div className="w-12 h-px bg-accent/40" />
      </div>

      <h2
        className="fade-up font-display font-extrabold tracking-tight mb-16 text-slate-900"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          animationFillMode: "forwards",
        }}
      >
        Tech Stack &{" "}
        <span className="text-accent">Expertise</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {skillCategories.map((cat, i) => (
          <div
            key={cat.label}
            className="fade-up bg-surface p-8 relative overflow-hidden group hover:bg-bg2 transition-colors duration-300"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top" />

            {/* Top-right corner decoration */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-border group-hover:border-accent/40 transition-colors duration-300" />

            <div
              className="font-mono text-xs text-muted uppercase tracking-widest mb-5 flex items-center gap-2"
              
            >
              <span>{cat.icon}</span> {cat.label}
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-3 py-1.5 border border-border bg-white text-slate-700 hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
                  
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
