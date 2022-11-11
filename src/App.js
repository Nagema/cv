import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Knowledge from "./components/Knowledge";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactInfo";
import { useEffect, useState } from "react";

function App() {
  const [cvInfo, setCvInfo] = useState(null);

  useEffect(() => {
    fetch("./cv.json")
      .then((response) => response.json())
      .then((data) => {
        setCvInfo(data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      {cvInfo && (
        <>
          <Hero hero={cvInfo.hero} />
          <Routes>
            <Route
              path="/"
              element={<Education education={cvInfo.education} />}
            ></Route>
            <Route
              path="/education"
              element={<Education education={cvInfo.education} />}
            ></Route>
            <Route
              path="/experience"
              element={<Experience experience={cvInfo.experience} />}
            ></Route>
            <Route
              path="/knowledge"
              element={
                <Knowledge
                  languages={cvInfo.languages}
                  tecnologies={cvInfo.tecnologies}
                />
              }
            ></Route>
            <Route
              path="/projects"
              element={<Projects projects={cvInfo.projects} />}
            ></Route>
            <Route
              path="/contact-form"
              element={
                <ContactForm
                  socialNetworking={cvInfo.socialNetworking}
                  heroInfo={cvInfo.hero}
                />
              }
            ></Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
