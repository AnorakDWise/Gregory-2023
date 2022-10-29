import Home from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  return (
    <main className="overflow-x-hidden bg-gradient-to-tr from-stone-900 to-stone-600">
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
