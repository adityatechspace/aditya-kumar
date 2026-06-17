function Testimonials() {
  const testimonials = [1, 2, 3];

  return (
    <section id="testimonials" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-24">
          <p className="text-blue-400 mb-2">
            TESTIMONIALS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            What People Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <p className="text-slate-400 mb-6">
                Testimonial will be added later.
              </p>

              <div>
                <h3 className="font-semibold">
                  Name Placeholder
                </h3>

                <p className="text-sm text-blue-400">
                  Position Placeholder
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