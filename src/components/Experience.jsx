import React from "react";
import "./Experience.css";
const Experience = ({ experience }) => {
  return (
    <div className="experience-section">
      <h3>EXPERIENCE</h3>
      {experience.map((item) => {
        return (
          <div className="experience-info" key={JSON.stringify(item)}>
            <p>{item.name}</p>
            <p>{item.date}</p>
            <p>{item.where}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
