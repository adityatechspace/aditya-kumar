import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Counter from "./components/home/Counter";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import ChatBot from "./components/chatbot/ChatBot";
import Experience from "./components/experience/Experience";
import GithubGraph from "./components/github/GithubGraph";
import Testimonials from "./components/testimonials/Testimonials";
import Certifications from "./components/certifications/Certifications";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import FloatingAIButton from "./components/chatbot/FloatingAIButton";

function App() {
  return (
    <div className="app-background min-h-screen text-white">
      <Navbar />
      <Hero />
      <Counter />
      <About />
      <Skills />
      <Projects />
      <ChatBot />
      <Experience />
      <GithubGraph />
      <Testimonials />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
      <FloatingAIButton />
    </div>
  );
}

export default App;