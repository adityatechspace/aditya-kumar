import {
FiBook,
FiCode,
FiCpu,
FiAward,
FiBriefcase,
} from "react-icons/fi";

function About({ about }) {
const roadmapIcons = {
book: FiBook,
code: FiCode,
cpu: FiCpu,
award: FiAward,
briefcase: FiBriefcase,
};

if (!about) {
return null;
}

return ( <section id="about" className="py-32 text-white"> <div className="mx-auto max-w-6xl px-6">
{/* Heading */} <div className="relative mb-20"> <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />

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
      <div className="absolute bottom-0 left-6 top-0 hidden w-[2px] bg-slate-800 md:block" />

      <div className="space-y-12">
        {about.roadmap?.map((item, index) => {
          const Icon = roadmapIcons[item.icon] || FiBook;

          return (
            <div key={`${item.year}-${index}`} className="flex items-start gap-8">
              <div className="z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl md:flex">
                <Icon />
              </div>

              <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50">
                <span className="font-semibold text-blue-400">
                  {item.year}
                </span>

                <h3 className="mb-3 mt-2 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

);
}

export default About;
