import "./App.css";
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
        </div>
      </div>
    </main>
  );
}

export default App;
