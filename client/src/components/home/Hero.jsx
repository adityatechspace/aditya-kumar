import { useEffect, useState } from "react";

function Hero({ personal, buttons }) {
  const {
    title,
    firstName,
    secondName,
    status,
    subtitle = [],
    description,
    techStack = [],
    profilePicture,
  } = personal || {};
  const { project, contact } = buttons || {};

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const reveal = (delay = 0) =>
    `transition-all duration-700 ease-out ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 text-white"
    >
      {/* Ambient background glow — lives at section level now, not nested in a chip */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Availability */}
            {status && (
              <div
                style={{ transitionDelay: "0ms" }}
                className={`${reveal()} inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/20 bg-orange-400/10 px-5 py-2 mb-8`}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-sm font-medium text-orange-300">
                  {status}
                </span>
              </div>
            )}

            {/* Heading */}
            <p style={{ transitionDelay: "80ms" }} className={`${reveal()} text-lg text-slate-400 mb-2`}>
              {title}
            </p>

            <h1
              style={{ transitionDelay: "140ms" }}
              className={`${reveal()} text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6`}
            >
              <span className="text-blue-400">{firstName}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {secondName}
              </span>
            </h1>

            {/* Subtitle */}
            <h2
              style={{ transitionDelay: "200ms" }}
              className={`${reveal()} max-w-xl text-2xl md:text-3xl font-semibold text-slate-200 leading-snug`}
            >
              {subtitle[0]}
              <br />
              {subtitle[1]}
            </h2>

            {/* Description */}
            <p style={{ transitionDelay: "260ms" }} className={`${reveal()} mt-8 max-w-xl text-lg leading-8 text-slate-400`}>
              {description}
            </p>

            {/* Tech Stack */}
            <div style={{ transitionDelay: "320ms" }} className={`${reveal()} mt-8 flex flex-wrap gap-3`}>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 backdrop-blur-md transition hover:border-blue-500/50 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div style={{ transitionDelay: "380ms" }} className={`${reveal()} mt-12 flex flex-wrap items-center gap-6`}>
              <a
                href={contact?.link}
                className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              >
                {contact?.text}
              </a>

              <a
                href={project?.link}
                className="group flex items-center gap-2 text-lg font-medium text-slate-300 transition hover:text-white"
              >
                {project?.text}
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div
            style={{ transitionDelay: "160ms" }}
            className={`${reveal()} flex justify-center lg:justify-end`}
          >
            <div className="relative w-full max-w-[360px]">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-[90px] scale-125 rounded-full" />

              {/* Gradient Border */}
              <div className="relative rounded-[32px] p-[2px] bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500">
                {/* Card */}
                <div className="relative overflow-hidden rounded-[30px] bg-slate-950">
                  <div className="absolute -top-20 -left-20 w-52 h-52 rounded-full bg-blue-500/20 blur-3xl" />

                  <img
                    src={profilePicture}
                    alt={`${firstName} ${secondName}`}
                    className="relative w-full object-cover transition duration-500 hover:scale-105"
                  />

                  {/* Availability Badge */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-2 backdrop-blur-md shadow-xl">
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-white whitespace-nowrap">
                        Open to Opportunities
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          className="absolute -bottom-2 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 transition hover:text-slate-300 md:flex"
        >
          Scroll
          <span className="flex h-8 w-5 items-start justify-center rounded-full border border-slate-700 p-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500" />
          </span>
        </a>
      </div>
    </section>
  );
}

export default Hero;