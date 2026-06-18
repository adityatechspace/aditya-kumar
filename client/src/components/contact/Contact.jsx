import ContactForm from "./contactForm";

function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-24">
          <p className="text-blue-400 mb-2">
            CONTACT
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Build Something Together
          </h2>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;