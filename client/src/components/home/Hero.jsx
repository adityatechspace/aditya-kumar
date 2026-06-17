import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiGlobe,
  FiDownload,
} from "react-icons/fi";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-32 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-sm text-blue-300">
                🚀 Available for Opportunities
              </span>

              <span className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300">
                🤖 AI Portfolio Assistant Available
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Aditya Kumar
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
              Software Engineer · AI Developer · Full Stack Developer
            </h2>

            <p className="text-slate-400 leading-relaxed max-w-xl mb-10">
              I build intelligent software solutions using AI,
              Machine Learning, and modern web technologies.
              Passionate about solving real-world problems through
              scalable applications and automation.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-medium"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-xl border border-slate-700 flex items-center gap-2"
              >
                <FiDownload />
                Resume
              </a>

              <a
                href="#ai-assistant"
                className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400"
              >
                Ask AI Assistant
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/adityatechspace"
                className="w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center hover:border-blue-500 transition"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/go-on-adityakumar"
                className="w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center hover:border-blue-500 transition"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:adityaproinfo@gmail.com"
                className="w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center hover:border-blue-500 transition"
              >
                <FiMail />
              </a>

              <a
                href="https://adityatechspace.github.io/"
                className="w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center hover:border-blue-500 transition"
              >
                <FiGlobe />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full"></div>

              <img
                src="data:image/jpeg;base64,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"
                alt="Profile"
                className="relative w-[300px] md:w-[255px] rounded-3xl border border-slate-800 shadow-2xl"
              />

              <div className="absolute bottom-5 right-5 px-4 py-2 rounded-full bg-slate-900 border border-slate-700">
                🟢 Open to Roles
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;