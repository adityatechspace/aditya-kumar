import SkillCard from "./SkillCard";

function Skills({ skills }) {
  if (!skills) {
    return null;
  }

  const skillSections = skills.sections || [];

  return (
    <section id="skills" className="py-32 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="relative mb-20">
          <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400/80">
                {skills.title}
              </span>
            </div>

            <h2 className="mt-5 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-5xl">
              {skills.subtitle}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              {skills.description}
            </p>

            <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
          </div>
        </div>

        {/* Skill cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillSections.map((skill, index) => (
            <SkillCard
              key={`${skill.title}-${index}`}
              title={skill.title}
              level={skill.level}
              technologies={skill.technologies || []}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;