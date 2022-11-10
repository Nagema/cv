import React from "react";
import "./Knowledge.css";

const Knowledge = ({ languages, tecnologies }) => {
  return (
    <div className="card">
      <div className="knowledge-section">
        <h3>KNOWLEDGE</h3>
        <h4>Languages</h4>
        {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h5>{item.language}</h5>
              <ul className="skills-list">
                <li>{item.wrlevel}</li>
                <li>{item.splevel}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="knowledge-section ">
        <h4>Skills</h4>
        {tecnologies.map((item) => {
          return (
            <ul className="skills-list" key={JSON.stringify(item)}>
              <li>{item}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Knowledge;
