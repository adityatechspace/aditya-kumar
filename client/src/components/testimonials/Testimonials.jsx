function Testimonials({ testimonials = [] }) {
  const testimonialItems = testimonials.length
    ? testimonials
    : [
        {
          name: "John Doe",
          position: "Client",
          quote: "Testimonial will be added later.",
        },
        {
          name: "Jane Smith",
          position: "Team Lead",
          quote: "Testimonial will be added later.",
        },
        {
          name: "Alex Johnson",
          position: "Peer",
          quote: "Testimonial will be added later.",
        },
      ];

  return (
    <section id="testimonials" className="py-32">
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
         TESTIMONIALS

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
What People Say

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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialItems.map((item, index) => (
            <div
              key={item.name || index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <p className="text-slate-400 mb-6">
                {item.quote || "No testimonial content available."}
              </p>

              <div>
                <h3 className="font-semibold">
                  {item.name || "Anonymous"}
                </h3>

                <p className="text-sm text-blue-400">
                  {item.position || item.role || "Contributor"}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;