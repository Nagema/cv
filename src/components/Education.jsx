import React from "react";
import "./Education.css";
const Education = ({ education }) => {
  return (
    <div>
      <div className="education-wrapper">
        <h3>EDUCATION - TRAINING</h3>
        {education.map((item) => {
          return (
            <div className="education-info" key={JSON.stringify(item)}>
              <p>{item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
