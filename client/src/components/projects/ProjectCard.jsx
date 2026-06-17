import { FiGithub, FiExternalLink } from "react-icons/fi";


function ProjectCard({ title = "Project Title", description = "Project description.", image = "", technologies = [], github = "#", demo = "#" }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300">
      <img src="https://cdn-icons-png.freepik.com/256/18691/18691029.png?semt=ais_white_label" alt={title} className="w-full h-56 object-cover" />

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>

        <p className="text-slate-400 mb-5">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {(technologies || []).map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-800 rounded-full text-sm">{tech}</span>
          ))}
        </div>

        <div className="flex gap-3">
          <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700">
            <FiGithub />
            Code
          </a>

          <a href={demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600">
            <FiExternalLink />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;