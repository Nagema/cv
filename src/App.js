import { useState } from "react";
import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Knowledge from "./components/Knowledge";
import Projects from "./components/Projects";
import { CV } from "./CV/CV";
import NavBar from "./components/NavBar";

const { hero, education, experience, languages, tecnologies, projects } = CV;
function App() {
  let section = "education";
  const [showSection, setShowSection] = useState(section);

  const showInfo = (e) => {
    section = e.target.value;
    setShowSection(section);
  };

  return (
    <div className="card">
      <NavBar showInfo={showInfo} />
      <Hero hero={hero} />

      {showSection === "education" && <Education education={education} />}
      {showSection === "experience" && <Experience experience={experience} />}
      {showSection === "knowledge" && (
        <Knowledge languages={languages} tecnologies={tecnologies} />
      )}
      {showSection === "projects" && <Projects projects={projects} />}
    </div>
  );
}

export default App;
