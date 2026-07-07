import ContactForm from "./contactForm";

function Contact({ contact = {} }) {
  const { email, phone, address } = contact;

  return (
    <section id="contact" className="py-32">
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
         CONTACT

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
Let's Build Something Together
        </h2>

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

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <ContactForm />

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Contact Details
            </h3>

            {email ? (
              <p className="text-slate-400 mb-3">
                <span className="font-medium text-blue-400">Email:</span>{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-white hover:text-blue-400"
                >
                  {email}
                </a>
              </p>
            ) : null}

            {phone ? (
              <p className="text-slate-400 mb-3">
                <span className="font-medium text-blue-400">Phone:</span>{" "}
                <a
                  href={`tel:${phone}`}
                  className="text-white hover:text-blue-400"
                >
                  {phone}
                </a>
              </p>
            ) : null}
<div className="flex items-start text-slate-400">
  <span className="shrink-0 font-medium text-blue-400">Address:</span>

  <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
    target="_blank"
    rel="noreferrer"
    className="ml-1 text-white hover:text-blue-400"
  >
    {address}
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;