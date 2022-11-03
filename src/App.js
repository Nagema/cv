import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import More from "./components/More";
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
      <button value="education" onClick={showInfo}>
        Education
      </button>
      <button value="experience" onClick={showInfo}>
        Experience
      </button>
      <button value="more" onClick={showInfo}>
        More
      </button>
      {showSection === "education" && <Education education={education} />}
      {showSection === "experience" && <Experience experience={experience} />}
      {showSection === "more" && (
        <More
          languages={languages}
          tecnologies={tecnologies}
          projects={projects}
        />
      )}
    </div>
  );
}

export default App;
