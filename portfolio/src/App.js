import Home from "./components/home";
import navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import skills from "./components/skills";
import contact from "./components/contact";

function App() {
  return (
    <main>
      <Home />
      <navbar />
      <About />
      <Projects />
      <skills />
      <contact />
    </main>
  );
}

export default App;
