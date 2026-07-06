import SkillCard from "./SkillCard";

function Skills({ skills = {} }) {
  const skillSections = [
    {
      title: "Frontend Development",
      technologies: skills.frontend || [],
      level: 95,
    },
    {
      title: "Backend Development",
      technologies: skills.backend || [],
      level: 90,
    },
    {
      title: "Database",
      technologies: skills.database || [],
      level: 85,
    },
    {
      title: "Programming Languages",
      technologies: skills.programming || [],
      level: 90,
    },
    {
      title: "Artificial Intelligence",
      technologies: skills.ai || [],
      level: 88,
    },
    {
      title: "DevOps & Cloud",
      technologies: skills.devops || [],
      level: 80,
    },
    {
      title: "Tools & Platforms",
      technologies: skills.tools || [],
      level: 82,
    },
    {
      title: "Soft Skills",
      technologies: skills.softSkills || [],
      level: 84,
    },
  ].filter((section) => section.technologies.length > 0);

  return (
    <section
      id="skills"
      className="py-32 text-white"
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
            SKILLS
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
               Technical Expertise

        </h2>

        <p className="
        mt-6
        max-w-xl
        text-lg
        leading-8
        text-slate-400
        ">
            Technologies, frameworks, and tools
            I use to build modern applications.

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillSections.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              level={skill.level}
              technologies={skill.technologies}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;