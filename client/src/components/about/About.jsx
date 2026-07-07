import { useEffect, useRef, useState } from "react";
import {
  FiBook,
  FiCode,
  FiCpu,
  FiAward,
  FiBriefcase,
} from "react-icons/fi";

const roadmapIcons = {
  book: FiBook,
  code: FiCode,
  cpu: FiCpu,
  award: FiAward,
  briefcase: FiBriefcase,
};

function TimelineItem({ item, index, isLast }) {
  const Icon = roadmapIcons[item.icon] || FiBook;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-start gap-8 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div
        className={`group z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl transition-transform duration-300 hover:scale-110 md:flex ${
          isLast
            ? "bg-emerald-500 shadow-lg shadow-emerald-500/30"
            : "bg-blue-600"
        }`}
      >
        <Icon />
      </div>

      <div
        className={`flex-1 rounded-2xl border bg-slate-900 p-8 transition duration-300 hover:-translate-y-1 ${
          isLast
            ? "border-emerald-500/40 hover:border-emerald-400/70"
            : "border-slate-800 hover:border-blue-500/50"
        }`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className={`font-semibold ${isLast ? "text-emerald-400" : "text-blue-400"}`}>
            {item.year}
          </span>

          {isLast && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Present
            </span>
          )}
        </div>

        <h3 className="mb-3 mt-2 text-2xl font-semibold">{item.title}</h3>

        <p className="leading-relaxed text-slate-400">{item.description}</p>
      </div>
    </div>
  );
}

function About({ about }) {
  if (!about) {
    return null;
  }

  return (
    <section id="about" className="py-32 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="relative mb-20">
          <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400/80">
                {about.title}
              </span>
            </div>

            <h2 className="mt-5 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-5xl">
              {about.subtitle}
            </h2>

            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-8 text-slate-400">
              {about.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 hidden w-[2px] bg-gradient-to-b from-slate-800 via-slate-800 to-emerald-500/40 md:block" />

          <div className="space-y-12">
            {about.roadmap?.map((item, index) => (
              <TimelineItem
                key={`${item.year}-${index}`}
                item={item}
                index={index}
                isLast={index === about.roadmap.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;