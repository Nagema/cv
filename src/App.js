import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Knowledge from "./components/Knowledge";
import Projects from "./components/Projects";
import { CV } from "./CV/CV";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";

const { hero, education, experience, languages, tecnologies, projects } = CV;
function App() {
  return (
    <div className="card">
      <NavBar />
      <Hero hero={hero} />
      <Routes>
        <Route path="/" element={<Education education={education} />}></Route>
        <Route
          path="/education"
          element={<Education education={education} />}
        ></Route>
        <Route
          path="/experience"
          element={<Experience experience={experience} />}
        ></Route>
        <Route
          path="/knowledge"
          element={
            <Knowledge languages={languages} tecnologies={tecnologies} />
          }
        ></Route>
        <Route
          path="/projects"
          element={<Projects projects={projects} />}
        ></Route>
        <Route path="/contact-form" element={<ContactForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
