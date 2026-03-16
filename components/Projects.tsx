"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    num: "01",
    name: "Ecommerce Platform",
    description:
      "Full-featured Ecommerce Application.",
    stack: ["Nodejs", "Reactjs", "MongoDB", "AWS"],
    link: "https://tlsfe.vercel.app/",
    accent: "accent",
  },
  {
    num: "02",
    name: "Reactjs&Automation",
    description:
      "An Example of Fullstack application with Automation Testing",
    stack: ["Nodejs", "Reactjs","Playwright","Cucumber"],
    link: "https://github.com/Subhrotechinfo/reactjs-automation-playwright",
    accent: "accent2",
  },
  {
    num: "03",
    name: "Hotel Template",
    description:
      "Responsive hotel website template with booking UI, gallery, and contact forms using modern web standards.",
    stack: ["HTML5", "CSS3", "Bootstrap 3"],
    link: "#",
    accent: "accent",
  },
 
];

export default function Projects() {
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
      id="projects"
      className="relative z-10 px-8 md:px-16 py-28 max-w-6xl mx-auto"
      ref={sectionRef}
    >
      <div className="fade-up flex items-center gap-3 mb-3">
        <span
          className="font-mono text-xs text-accent uppercase tracking-widest"
          
        >
          04 / Projects
        </span>
        <div className="w-12 h-px bg-accent/40" />
      </div>

      <h2
        className="fade-up font-display font-extrabold tracking-tight mb-4 text-slate-900"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        Featured <span className="text-accent">Work</span>
      </h2>
      <p className="fade-up text-muted text-sm font-mono mb-16 max-w-lg"
        >
        A selection of projects spanning enterprise systems, web apps, and open source.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {projects.map((project, i) => (
          <div
            key={project.num}
            className="fade-up bg-surface p-9 relative overflow-hidden group hover:-translate-y-1 hover:bg-bg2 transition-all duration-300 border border-transparent hover:border-accent/20"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-border group-hover:border-accent/40 transition-colors duration-300" />

            {/* Number */}
            <div
              className="font-mono text-xs text-border tracking-widest mb-5 group-hover:text-muted transition-colors"
              
            >
              {project.num}
            </div>

            {/* Name */}
            <h3
              className="font-display font-extrabold text-xl text-slate-900 mb-3 tracking-tight group-hover:text-accent transition-colors duration-200"
              
            >
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-2.5 py-1 border border-border bg-surface text-accent2"
                  
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={project.link}
              className="font-mono text-xs text-accent uppercase tracking-widest inline-flex items-center gap-2 hover:gap-4 transition-all duration-200 group/link"
              
            >
              View Source
              <span className="group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
