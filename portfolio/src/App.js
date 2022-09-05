import home from "./components/home";
import navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import skills from "./components/skills";
import contact from "./components/contact";

function App() {
  return (
    <main>
      <home />
      <navbar />
      <About />
      <skills />
      <contact />
    </main>
  );
}

export default App;
