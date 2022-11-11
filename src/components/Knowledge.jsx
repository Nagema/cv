import React from "react";
import "./Knowledge.css";

const Knowledge = ({ languages, tecnologies }) => {
  return (
    <div className="knowledge-section">
      <h3>KNOWLEDGE</h3>
      <div className="knowledge-info">
        <h4>Languages</h4>
        {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.language}</p>
              <ul className="skills-list">
                <li>{item.wrlevel}</li>
                <li>{item.splevel}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="knowledge-info">
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
