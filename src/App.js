import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import More from "./components/More";
import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities, volunteer } = CV;
function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="card">
      <Hero hero={hero} />
      <About hero={hero.aboutMe} />
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}
      >
        Education
      </button>
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(false)}
      >
        Experience
      </button>
      {showEducation ? (
        <Education education={education} />
      ) : (
        <Experience experience={experience} />
      )}
      <Experience experience={experience} />
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
    </div>
  );
}

export default App;
