function Experience() {
  const experiences = [
    {
      role: "Process Associate - AI",
      company: "Kriya NextWealth",
      duration: "2026 March - Present",
      description:
        "Lingust"
    },

    {
      role: "AI Language Model Developer",
      company: "OLA Krutrim",
      duration: "March 2025 - July 2025",
      description:
        "AI Developer."
    },
  ];

  return (
    <section
      id="experience"
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-24">
          <p className="text-blue-400 mb-2">
            EXPERIENCE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            What I've Been Working On
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
            >
              <div className="flex justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {item.role}
                  </h3>

                  <p className="text-blue-400">
                    {item.company}
                  </p>
                </div>

                <span className="text-slate-400">
                  {item.duration}
                </span>
              </div>

              <p className="text-slate-400 mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;