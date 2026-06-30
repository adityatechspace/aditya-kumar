import ProjectCard from "./ProjectCard";
import portfolioData from "../../data/portfolioData";

function Projects() {
  return (
    <section
      id="projects"
      className="py-32 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-26">
          <p className="text-blue-400 font-medium mb-3">
            FEATURED WORK
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Showcase of AI, Full Stack and Engineering projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
         {portfolioData.projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;