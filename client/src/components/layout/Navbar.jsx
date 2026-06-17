import { useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "About",
    "Skills",
    "Projects",
    "AI Assistant",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-slate-800 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
            AK
          </div>

          <h1 className="font-semibold text-lg">
            Aditya Kumar
          </h1>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm text-slate-300 hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl border border-slate-700 flex items-center justify-center"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <a
            href="#contact"
            className="hidden md:flex px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-sm font-medium"
          >
            Let's Talk
          </a>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;