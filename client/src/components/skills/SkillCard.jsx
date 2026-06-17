function SkillCard({
  title,
  level,
  technologies,
}) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300">
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <span className="text-blue-400 font-medium">
          {level}%
        </span>
      </div>

      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{
            width: `${level}%`,
          }}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-sm bg-slate-800 text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;