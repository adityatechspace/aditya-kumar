function Certifications() {
  const certifications = [1, 2, 3, 4];

  return (
    <section id="certifications" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-24">
          <p className="text-blue-400 mb-2">
            CERTIFICATIONS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Continuous Learning
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((item) => (
            <div
              key={item}
              className="border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="font-semibold mb-2">
                Certificate Placeholder
              </h3>

              <p className="text-slate-400 text-sm">
                Provider Placeholder
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;