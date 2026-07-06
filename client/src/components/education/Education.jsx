function Education({ education = [] }) {
  const educationItems = education.length
    ? education
    : [
        {
          degree: "Bachelor of Computer Application (BCA)",
          institution: "Chandigarh University",
          location: "Punjab, India",
          duration: "2022 - 2025",
          cgpa: "8.50",
          description:
            "Completed Bachelor of Computer Application with a focus on software development and AI-powered systems.",
        },
      ];

  return (
    <section id="education" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

      {/* Heading */}

 <div className="relative mb-20">

    <div className="
    absolute
    -left-20
    top-0
    h-56
    w-56
    rounded-full
    bg-blue-500/10
    blur-[110px]
    "></div>

    <div className="relative">

        <div className="inline-flex items-center gap-3">

            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>

            <span className="
            uppercase
            tracking-[0.35em]
            text-xs
            font-semibold
            text-blue-400/80
            ">
         EDUCATION

            </span>

        </div>

        <h2 className="
        mt-5
        text-4xl
        md:text-5xl
        font-extrabold
        leading-tight

        bg-gradient-to-r
        from-white
        via-slate-100
        to-slate-400

        bg-clip-text
        text-transparent
        ">
Academic Background
        </h2>

        <p className="
        mt-6
        max-w-xl
        text-lg
        leading-8
        text-slate-400
        ">
            My coding activity and open-source contributions.
        </p>

        <div className="
        mt-8
        h-1
        w-28
        rounded-full
        bg-gradient-to-r
        from-blue-500
        via-purple-500
        to-cyan-500
        "/>

    </div>

</div>

        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <div
              key={item.degree || item.institution || index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold">
                {item.degree}
              </h3>

              <p className="text-blue-400 mt-2">
                {item.institution}
              </p>

              <p className="text-slate-400 mt-3">
                {item.location} · {item.duration}
              </p>

              {item.cgpa && (
                <p className="text-slate-500 mt-3">
                  CGPA: {item.cgpa}
                </p>
              )}

              {item.description && (
                <p className="text-slate-400 mt-4">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;