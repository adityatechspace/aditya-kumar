function ContactForm() {
  return (
    <form className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-5">

      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 bg-slate-800 rounded-xl"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 bg-slate-800 rounded-xl"
      />

      <textarea
        rows="5"
        placeholder="Message"
        className="w-full p-3 bg-slate-800 rounded-xl"
      />

      <button
        type="submit"
        className="bg-blue-600 px-6 py-3 rounded-xl"
      >
        Send Message
      </button>

    </form>
  );
}

export default ContactForm;