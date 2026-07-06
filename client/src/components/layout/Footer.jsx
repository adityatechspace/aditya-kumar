import {
    FaGithub,
    FaEnvelope,
    FaDownload,
    FaGlobe,
    FaLinkedin,
} from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function Footer({ personal = {}, footer = {} }) {
  const name = personal.firstName && personal.secondName ? `${personal.firstName} ${personal.secondName}` : "Aditya Kumar";
  const subtitle = footer.subtitle || "AI Engineer Portfolio";
  const description = footer.description ||
    "Building AI-powered applications, scalable full-stack solutions, and modern web experiences using Python, React, Node.js and LLMs.";
  const copyrightText = footer.copyright || "© 2026 Aditya Kumar. All Rights Reserved.";

  return (
   <footer className="border-t border-slate-800 py-10">
  <div className="max-w-7xl mx-auto px-6">

    {/* Top */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* Left */}
      <div>
        <h3 className="text-2xl font-bold text-white">
          {name}
        </h3>

        <p className="mt-2 text-blue-400 font-medium">
          {subtitle}
        </p>

        <p className="mt-4 max-w-md text-slate-400 leading-relaxed">
          {description}
        </p>

        <div className="mt-8">
          <p className="text-sm text-slate-400 mb-3">
            Connect with me
          </p>

          <div className="flex items-center gap-3">
           <a
      href="https://github.com/adityatechspace"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:text-white hover:shadow-lg hover:shadow-white/10"
    >
      <FaGithub className="text-lg" />
    </a>

    <a
      href="https://www.linkedin.com/in/go-on-adityakumar"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
    >
      <FaLinkedin className="text-lg" />
    </a>

    <a
      href="mailto:adityaproinfo@gmail.com"
      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:text-red-500 hover:shadow-lg hover:shadow-red-500/20"
    >
      <FaEnvelope className="text-lg" />
    </a>

    <a
      href="https://adityatechspace.github.io/"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      <FaGlobe className="text-lg" />
    </a>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="md:justify-self-end">
        <h4 className="text-lg font-semibold text-white mb-4">
          Quick Links
        </h4>

        <ul className="space-y-3 text-slate-400">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

    </div>

    {/* Bottom */}
    <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-sm text-slate-500 text-center md:text-left">
        © 2026 Aditya Kumar. All Rights Reserved.
      </p>

      <div className="flex items-center gap-2 text-sm text-slate-400">
        <span>Powered by</span>

        <div className="flex items-center gap-2">
          <FaReact className="text-cyan-400 text-xl" />
          <span>React</span>

          <span className="text-slate-600">•</span>

          <RiTailwindCssFill className="text-sky-400 text-xl" />
          <span>Tailwind CSS</span>

          <span className="text-slate-600">•</span>

          <FaNodeJs className="text-green-500 text-xl" />
          <span>Node.js</span>
        </div>
      </div>

    </div>

  </div>
</footer>
  );
}

export default Footer;