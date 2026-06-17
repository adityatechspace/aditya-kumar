import SkillCard from "./SkillCard";

function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      level: 95,
      technologies: [
        "React",
        "JavaScript",
        "Tailwind",
        "HTML",
        "CSS",
      ],
    },

    {
      title: "Backend Development",
      level: 90,
      technologies: [
        "Node.js",
        "Express",
        "REST API",
        "JWT",
      ],
    },

    {
      title: "Database",
      level: 85,
      technologies: [
        "MongoDB",
        "MySQL",
        "Firebase",
      ],
    },

    {
      title: "Artificial Intelligence",
      level: 88,
      technologies: [
        "OpenAI",
        "Gemini",
        "LangChain",
        "Prompt Engineering",
      ],
    },

    {
      title: "Cloud & DevOps",
      level: 80,
      technologies: [
        "Vercel",
        "Render",
        "GitHub",
        "CI/CD",
      ],
    },

    {
      title: "Problem Solving",
      level: 92,
      technologies: [
        "DSA",
        "Algorithms",
        "System Design",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-32 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-26">
          <p className="text-blue-400 font-medium mb-3">
            SKILLS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Technical Expertise
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Technologies, frameworks, and tools
            I use to build modern applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
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