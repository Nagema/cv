import React from "react";
import "./Knowledge.css";

const Knowledge = ({ languages, tecnologies }) => {
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
    </div>
  );
};

export default Knowledge;
