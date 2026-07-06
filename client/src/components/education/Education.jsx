function Education({ education = {} }) {
  if (!education?.section) {
    return null;
  }

  const section = education.section;
  const data = education.data || [];

  return (
    <section id="education" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="relative mb-20">
          <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400/80">
                {section.title}
              </span>
            </div>

            <h2 className="mt-5 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-5xl">
              {section.subtitle}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              {section.description}
            </p>

            <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
          </div>
        </div>

        <div className="space-y-8">
          {data.map((item, index) => (
            <div
              key={item.degree || item.institution || index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
            >
       <div className="flex items-start gap-4">
  {item.logo && (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-white p-2">
      <img
        src={item.logo}
        alt={`${item.institution} logo`}
        className="h-full w-full object-contain"
      />
    </div>
  )}

  <div>
    <h3 className="text-2xl font-semibold">
      {item.degree}
    </h3>

    <p className="mt-2 text-blue-400">
      {item.institution}
    </p>
  </div>
</div>
              <p className="mt-3 text-slate-400">
                {item.location} · {item.duration}
              </p>

              {item.cgpa && (
                <p className="mt-3 text-slate-500">
                  CGPA: {item.cgpa}
                </p>
              )}

              {item.description && (
                <p className="mt-4 text-slate-400">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;