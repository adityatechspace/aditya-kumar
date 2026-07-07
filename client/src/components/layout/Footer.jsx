import {
    FaGithub,
    FaEnvelope,
    FaDownload,
    FaGlobe,
    FaLinkedin,
    FaArrowUp,
} from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiVite, SiMongodb } from "react-icons/si";

function Footer({ personal = {}, footer = {} }) {
  const name = personal.firstName && personal.secondName ? `${personal.firstName} ${personal.secondName}` : "Aditya Kumar";
  const subtitle = footer.subtitle || "AI Engineer Portfolio";
  const description = footer.description ||
    "Building AI-powered applications, scalable full-stack solutions, and modern web experiences using Python, React, Node.js and LLMs.";
  const year = new Date().getFullYear();

  const socials = [
    { icon: FaGithub, href: "https://github.com/adityatechspace", hover: "hover:border-white hover:text-white hover:shadow-white/10" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/go-on-adityakumar", hover: "hover:border-blue-500 hover:text-blue-500 hover:shadow-blue-500/20" },
    { icon: FaEnvelope, href: "mailto:adityaproinfo@gmail.com", hover: "hover:border-red-500 hover:text-red-500 hover:shadow-red-500/20" },
    { icon: FaGlobe, href: "https://adityatechspace.github.io/", hover: "hover:border-cyan-500 hover:text-cyan-400 hover:shadow-cyan-500/20" },
  ];

  const stack = [
    { icon: FaReact, label: "React", color: "text-cyan-400", ring: "hover:border-cyan-400/60" },
    { icon: SiExpress, label: "Express", color: "text-white", ring: "hover:border-slate-400" },
    { icon: SiVite, label: "Vite", color: "text-violet-400", ring: "hover:border-violet-400/60" },
    { icon: FaNodeJs, label: "Node.js", color: "text-green-500", ring: "hover:border-green-400/60" },
    { icon: RiTailwindCssFill, label: "Tailwind CSS", color: "text-sky-400", ring: "hover:border-sky-400/60" },
    { icon: SiMongodb, label: "MongoDB", color: "text-emerald-400", ring: "hover:border-emerald-400/60" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950 py-14">
      {/* signature gradient hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Left */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {name}
              </h3>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Open to work
              </span>
            </div>

            <p className="mt-2 text-blue-400 font-medium">
              {subtitle}
            </p>

            <p className="mt-4 max-w-md text-slate-400 leading-relaxed">
              {description}
            </p>

            <div className="mt-8">
              <p className="text-sm text-slate-500 mb-3 tracking-wide">
                Connect with me
              </p>

              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, href, hover }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${hover}`}
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-[auto_1fr] sm:gap-16">
            {/* Quick Links */}
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Explore
              </h4>

              <ul className="space-y-3 text-sm text-slate-400 whitespace-nowrap">
                {["home", "about", "skills", "projects", "contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="transition hover:text-blue-400"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="min-w-0">
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Built With
              </h4>

              <div className="grid grid-cols-2 gap-2.5">
                {stack.map(({ icon: Icon, label, color, ring }, i) => (
                  <div
                    key={i}
                    className={`flex h-11 min-w-0 items-center gap-2 overflow-hidden rounded-lg border border-slate-800 bg-slate-900/40 px-3 text-sm text-slate-300 transition ${ring}`}
                  >
                    <Icon className={`shrink-0 text-base ${color}`} />
                    <span className="truncate">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {year} {name}. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/60 hover:text-blue-400"
          >
            Back to top
            <FaArrowUp className="text-[10px] transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;