import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {
  return (
    <main className="mx-auto max-w-7xl antialiased overflow-x-hidden">
      <div className="bg-image bg-cover bg-fixed inset-0 bg-center">
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <Projects />
          <Skill />
          <Experience />
          <Education />
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
