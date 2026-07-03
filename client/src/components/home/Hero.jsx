

import {
    FaGithub,
    FaEnvelope,
    FaDownload,
    FaGlobe,
    FaLinkedin,
} from "react-icons/fa";

import portfolioData from "../../data/portfolioData" 

function Hero(){ const {title, firstName, secondName, availability, role, subtitle, description, techStack = [], profilePicture, button } = portfolioData.personal;
const {project, contact} = portfolioData.buttons;
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-32 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
<div className="flex flex-col justify-center">

  {/* Availability */}
  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 mb-8">
    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
    <div className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]"></div>

    <span className="text-sm font-medium text-emerald-300">
      {availability}
    </span>
  </div>

  {/* Heading */}
  <p className="text-lg text-slate-400 mb-2">
    {title}
  </p>

  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">

    <span className="text-blue-400">
      {firstName}
    </span>

    <br />

    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
      {secondName}
    </span>

  </h1>

  {/* Subtitle */}
  <h2 className="max-w-xl text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 leading-snug">
    {subtitle[0]}
    <br />
    {subtitle[1]}
  </h2>

  {/* Description */}
  <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

{description}

  </p>

  {/* Tech Stack */}
  <div className="mt-8 flex flex-wrap gap-3">

 
{/* Tech Stack */}
<div className="mt-8 flex flex-wrap gap-3">
  {techStack.map((tech) => (
    <span
      key={tech}
      className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 backdrop-blur-md"
    >
      {tech}
    </span>
  ))}
</div>

  </div>

  {/* CTA */}
  <div className="mt-12 flex flex-wrap items-center gap-6">

    <a
      href={contact.link}
      className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
    >
      {contact.text}
    </a>

    <a
      href={project.link}
      className="group flex items-center gap-2 text-lg font-medium text-slate-300 transition hover:text-white"
    >
      {project.text}

      <span className="transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>

    </a>

  </div>

</div>

{/* Right Content */}
<div className="flex justify-center lg:justify-end">
  <div className="relative">

    {/* Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-[90px] scale-125 rounded-full"></div>

    {/* Gradient Border */}
    <div className="relative rounded-[32px] p-[2px] bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500">

      {/* Card */}
      <div className="relative overflow-hidden rounded-[30px] bg-slate-950">

        {/* Optional decorative blur */}
        <div className="absolute -top-20 -left-20 w-52 h-52 rounded-full bg-blue-500/20 blur-3xl"></div>

        {/* Image */}
        <img
          src={profilePicture}
          alt="Aditya Kumar"
          className="relative w-[330px] lg:w-[360px] object-cover transition duration-500 hover:scale-105"
        />

        {/* Availability Badge */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-2 backdrop-blur-md shadow-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>

            <span className="text-sm font-medium text-white">
              Open to Opportunities
            </span>
          </div>
        </div>

      </div>

    </div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;