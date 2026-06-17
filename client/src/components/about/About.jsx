import {
  FiBook,
  FiCode,
  FiCpu,
  FiAward,
} from "react-icons/fi";

function About() {
  const roadmap = [
    {
      year: "2022",
      title: "Started Programming Journey",
      description:
        "Built strong foundations in programming, problem solving, and software development.",
      icon: <FiBook />,
    },

    {
      year: "2023",
      title: "Full Stack Development",
      description:
        "Learned React, Node.js, Express, and modern web application architecture.",
      icon: <FiCode />,
    },

    {
      year: "2024",
      title: "AI & Machine Learning",
      description:
        "Worked on AI-powered solutions, automation systems, and intelligent applications.",
      icon: <FiCpu />,
    },

    {
      year: "2025",
      title: "Professional Projects",
      description:
        "Delivered production-ready applications and expanded expertise in cloud and AI engineering.",
      icon: <FiAward />,
    },
  ];

  return (
    <section
      id="about"
      className="py-32 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <p className="text-blue-400 font-medium mb-3">
            ABOUT ME
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            My Journey
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            A roadmap of my growth as a developer,
            AI enthusiast, and problem solver.
          </p>
        </div>

        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-slate-800 hidden md:block"></div>

          <div className="space-y-12">

            {roadmap.map((item, index) => (
              <div
                key={index}
                className="flex gap-8 items-start"
              >
                <div className="hidden md:flex w-12 h-12 rounded-full bg-blue-600 items-center justify-center text-xl shrink-0 z-10">
                  {item.icon}
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex-1">
                  <span className="text-blue-400 font-semibold">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-semibold mt-2 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;