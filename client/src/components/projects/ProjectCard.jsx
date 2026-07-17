import { FiGithub, FiExternalLink, FiX  } from "react-icons/fi";
import { useState } from "react";



function ProjectCard({ title, description, image, technologies = [], github, demo }) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
<div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 flex flex-col h-full">      <img src= {image || "https://cdn-icons-png.freepik.com/256/18691/18691029.png?semt=ais_white_label"} alt={title} className="w-full h-56 object-cover" />

<div className="p-6 flex flex-col flex-1">
          <h3 className="text-2xl font-semibold mb-3">{title}</h3>

        <p className="text-slate-400 mb-5">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {(technologies || []).map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-800 rounded-full text-sm">{tech}</span>
          ))}
        </div>

<div className="flex gap-3 mt-auto pt-2">
    {/* GitHub */}
  <a
    href={github}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700"
  >
    <FiGithub />
    Code
  </a>

  {/* Live Demo */}
  <button
    onClick={() => setShowComingSoon(true)}
    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
  >
    <FiExternalLink />
    Live Demo
  </button>

  {/* Coming Soon Popup */}
  {showComingSoon && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

      <div className="relative w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center shadow-2xl">

        {/* Close Button */}
        <button
          onClick={() => setShowComingSoon(false)}
          className="absolute right-4 top-4 text-slate-400 transition hover:text-white"
        >
          <FiX size={22} />
        </button>

        {/* Icon */}
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
          <FiExternalLink className="text-3xl text-blue-500" />
        </div>

        {/* Content */}
        <h3 className="mb-3 text-2xl font-bold text-white">
          Coming Soon!
        </h3>

        <p className="mb-6 leading-relaxed text-slate-400">
          The live demo for this project is currently being prepared.
          It will be available very soon!
        </p>

        {/* Button */}
        <button
          onClick={() => setShowComingSoon(false)}
          className="w-full rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Got it
        </button>

      </div>
    </div>
  )}
</div>
      </div>
    </div>
  );
}

export default ProjectCard;