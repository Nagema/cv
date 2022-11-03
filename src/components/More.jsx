import React from "react";
import "./More.css";
const More = ({ languages, tecnologies, projects }) => {
  return (
    <div className="card">
      <div className="more-section languages">
        <h4>Languages</h4>
        <p>{languages.language}</p>
        <p>Writing: {languages.wrlevel}</p>
        <p>Speaking: {languages.splevel}</p>
      </div>
      <h4>Skills</h4>
      <div className="more-section tecnologies">
        {tecnologies.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <div className="more-section projects">
        <h4>Projects</h4>
        {projects.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>
                <a href={item.link} target="_blank">
                  {item.name}
                </a>
              </p>
              <p>
                <a href={item.repository} target="_blank">
                  Repository
                </a>
              </p>

              <p>{item.tecnology}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
