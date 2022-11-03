import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHouseLaptop,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Knowledge from "./components/Knowledge";
import Projects from "./components/Projects";
import { CV } from "./CV/CV";

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
      <Hero hero={hero} />
      <About hero={hero.aboutMe} />
      <div className="button-wrapper">
        <button className="button-opt" value="education" onClick={showInfo}>
          <FontAwesomeIcon icon={faGraduationCap} /> Education
        </button>

        <button className="button-opt" value="experience" onClick={showInfo}>
          <FontAwesomeIcon icon={faHouseLaptop} /> Experience
        </button>

        <button className="button-opt" value="knowledge" onClick={showInfo}>
          <FontAwesomeIcon icon={faCode} /> Knowledge
        </button>

        <button className="button-opt" value="projects" onClick={showInfo}>
          <FontAwesomeIcon icon={faCode} /> Projects
        </button>
      </div>

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
