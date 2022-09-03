import home from "./components/home";
import navbar from "./components/navbar";
import About from "./components/about";
import projects from "./components/projects";
import skills from "./components/skills";
import contact from "./components/contact";

function App() {
  return (
    <main>
      <home />
      <navbar />
      <About />
      <projects />
      <skills />
      <contact />
    </main>
  );
}

export default App;
