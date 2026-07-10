function Experience({ experience = [] }) {

  if (!experience?.section){
    return null;
  }
  const {title, subtitle, description} = experience.section;
  const {data = []} = experience.data;

  return (
    <section
      id="experience"
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

       {/* Heading */}

 <div className="relative mb-20">

    <div className="
    absolute
    -left-20
    top-0
    h-56
    w-56
    rounded-full
    bg-blue-500/10
    blur-[110px]
    "></div>

    <div className="relative">

        <div className="inline-flex items-center gap-3">

            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>

            <span className="
            uppercase
            tracking-[0.35em]
            text-xs
            font-semibold
            text-blue-400/80
            ">
                        {title}

            </span>

        </div>

        <h2 className="
        mt-5
        text-4xl
        md:text-5xl
        font-extrabold
        leading-tight

        bg-gradient-to-r
        from-white
        via-slate-100
        to-slate-400

        bg-clip-text
        text-transparent
        ">
          {subtitle}
        </h2>

        <p className="
        mt-6
        max-w-xl
        text-lg
        leading-8
        text-slate-400
        ">
          {description}
        </p>

        <div className="
        mt-8
        h-1
        w-28
        rounded-full
        bg-gradient-to-r
        from-blue-500
        via-purple-500
        to-cyan-500
        "/>

    </div>

</div>

<div className="space-y-8">
  {(experience.data || []).map((item) => (
    <div
      key={`${item.company}-${item.role}`}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Company logo / logos */}
          <div className="flex shrink-0 items-center gap-2">
            {(Array.isArray(item.logo) ? item.logo : [item.logo])
              .filter(Boolean)
              .map((logo, logoIndex) => (
                <div
                  key={`${item.company}-logo-${logoIndex}`}
                  className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-white p-2"
                >
                  <img
                    src={logo}
                    alt={`${item.company} logo ${logoIndex + 1}`}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">
              {item.role}
            </h3>

            <p className="mt-1 text-blue-400">
              {item.company}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              {item.location} · {item.type}
            </p>
          </div>
        </div>

        <span className="text-sm text-slate-400 sm:text-right">
          {item.duration}
        </span>
      </div>

      {/* Description */}
      {item.description && (
        <p className="mt-5 text-slate-400">
          {item.description}
        </p>
      )}

      {/* Responsibilities */}
      {item.responsibilities?.length > 0 && (
        <ul className="mt-5 list-inside list-disc space-y-2 text-slate-400">
          {item.responsibilities.map((responsibility, responsibilityIndex) => (
            <li key={`${item.company}-responsibility-${responsibilityIndex}`}>
              {responsibility}
            </li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      {item.technologies?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {item.technologies.map((technology, technologyIndex) => (
            <span
              key={`${item.company}-technology-${technologyIndex}`}
              className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
      )}
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

export default Experience;