"use client";
import { useEffect, useRef } from "react";

const timeline = [
  {
    period: "July 2025 — Present",
    role: "Lead - Technology",
    company: "Current Company",
    type: "work",
    current: true,
  },
  {
    period: "Jan 2024 – June 2025",
    role: "Lead - Technology",
    company: "Synechron Technologies Pvt. Ltd",
    type: "work",
    location: "AsiaHub Office , Singapore",
  },
  {
    period: "August 2023 – November 2024",
    role: "Lead Contributor",
    company: "Brillio",
    type: "work",
    location: "Remote, India",
  },
  {
    period: "March 2023 – August 2023",
    role: "Senior Software Specialist",
    company: "ESPL",
    type: "work",
    location: "Remote, Malaysia, Federal Territory of Kuala Lumpur",
  },
  {
    period: "Oct 2022 – March 2023",
    role: "Nodejs Consultant",
    company: "Upworks",
    type: "work",
    location: "Remote, India",
  },
  {
    period: "Apr 2022 – September 2022",
    role: "Senior Software Specialist",
    company: "IBM",
    type: "work",
    location: "AsiaHub Office , Singapore",
  },
  {
    period: "Oct 2021 — April 2022",
    role: "Software Development",
    company: "Valuefirst",
    type: "work",
    location: "Gurgaon, India",
  },
  {
    period: "Feb 2021 —Sep 2021",
    role: "Software Development Engineer — Level 1",
    company: "Nityo Infotech Sdn. Bhd.",
    type: "work",
    location: "Remote, Selangor Malaysia",
  },
  {
    period: "Dec 2019 — Jan 2021",
    role: "Software Development Engineer — Level 1",
    company: "Indianic Infotech Ltd",
    type: "work",
    location: "Ahmedabad, India",
  },
  {
    period: "Jun 2019 — Dec 2019",
    role: "Software Development Engineer — Level 1",
    company: "Acquire · Product Based, Ahmedabad",
    type: "work",
    location: "Ahmedabad, India",
  },
  {
    period: "Apr 2017 — Jun 2019",
    role: "Software Development Engineer",
    company: "Freelancer",
    type: "work",
    location: "Bangalore, India",
  },
  {
    period: "Apr 2015 — Mar 2017",
    role: "Business Analyst",
    company: "Royal Bank of Scotland · Chennai & Delhi",
    type: "work",
    location: "Chennai, India",
  },
  {
    period: "Aug 2012 — Mar 2015",
    role: "MCA — Masters in Computer Applications",
    company: "SRM University · Chennai",
    type: "education",
  },
  {
    period: "Jun 2009 — Jul 2012",
    role: "BCA — Bachelor of Computer Applications",
    company: "WBUT · Kolkata",
    type: "education",
  },
];

export default function Career() {
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
      id="career"
      className="relative z-10 px-8 md:px-16 py-28 max-w-6xl mx-auto"
      ref={sectionRef}
    >
      <div className="fade-up flex items-center gap-3 mb-3">
        <span
          className="font-mono text-xs text-accent uppercase tracking-widest"
          
        >
          03 / Career
        </span>
        <div className="w-12 h-px bg-accent/40" />
      </div>

      <h2
        className="fade-up font-display font-extrabold tracking-tight mb-16 text-slate-900"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        Journey &amp; <span className="text-accent">Experience</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Work */}
        <div>
          <h3
            className="fade-up font-mono text-xs text-muted uppercase tracking-widest mb-8 flex items-center gap-3"
            
          >
            <span className="text-accent">▸</span> Work Experience
          </h3>

          <div className="relative pl-10 timeline-line">
            {timeline
              .filter((t) => t.type === "work")
              .map((item, i) => (
                <div
                  key={i}
                  className="fade-up relative mb-10 last:mb-0"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Dot */}
                  <div
                    className={`absolute -left-[42px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
                      item.current
                        ? "bg-accent border-accent shadow-[0_0_12px_rgba(14,165,233,0.5)]"
                        : "bg-white border-accent/50"
                    }`}
                  />

                  {/* Period */}
                  <div
                    className="font-mono text-xs text-accent tracking-wider mb-1"
                    
                  >
                    {item.period}
                    {item.current && (
                      <span className="ml-2 text-accent2">● current</span>
                    )}
                  </div>

                  {/* Role */}
                  <div
                    className="font-display font-bold text-slate-900 text-base mb-1"
                    
                  >
                    {item.role}
                  </div>

                  {/* Company */}
                  <div
                    className="font-mono text-xs text-muted"
                    
                  >
                    {item.company} | {item.location}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3
            className="fade-up font-mono text-xs text-muted uppercase tracking-widest mb-8 flex items-center gap-3"
            
          >
            <span className="text-accent2">▸</span> Education
          </h3>

          <div className="relative pl-10" style={{ borderLeft: "1px solid rgba(255,107,53,0.4)" }}>
            {timeline
              .filter((t) => t.type === "education")
              .map((item, i) => (
                <div
                  key={i}
                  className="fade-up relative mb-10 last:mb-0"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Dot */}
                  <div className="absolute -left-[42px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-accent2/60" />

                  <div
                    className="font-mono text-xs text-accent2 tracking-wider mb-1"
                    
                  >
                    {item.period}
                  </div>
                  <div
                    className="font-display font-bold text-slate-900 text-base mb-1"
                    
                  >
                    {item.role}
                  </div>
                  <div
                    className="font-mono text-xs text-muted"
                    
                  >
                    {item.company}
                  </div>
                </div>
              ))}
          </div>

          {/* Born card */}
          <div className="fade-up mt-12 p-6 bg-surface border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-accent/10" />
            <div
              className="font-mono text-xs text-muted uppercase tracking-widest mb-2"
              
            >
              Origin
            </div>
            <div
              className="font-display font-extrabold text-3xl text-accent"
              
            >
              1990
            </div>
            <div
              className="font-mono text-xs text-muted mt-1"
              
            >
              West Bengal, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
