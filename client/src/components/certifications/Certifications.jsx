function Certifications({ certifications = [] }) {
  const certificationItems = certifications.length
    ? certifications
    : [
        {
          title: "AI based Fraud Detection Model",
          issuer: "Intel",
          year: "2025",
        },
      ];

  return (
    <section id="certifications" className="py-32">
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
         CERTIFICATIONS

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
Continuous Learning
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificationItems.map((item, index) => (
            <div
              key={item.title || index}
              className="border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="font-semibold mb-2">
                {item.title || "Certificate"}
              </h3>

              <p className="text-slate-400 text-sm">
                {item.issuer || item.provider || "Issuer not available"}
              </p>

              {item.year ? (
                <p className="text-slate-500 text-xs mt-2">
                  {item.year}
                </p>
              ) : null}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;