import "./Projects.css";
import React from "react";

const Projects = ({ projects }) => {
  return (
    <div className="more-section projects card">
      <h3>PROJECTS</h3>
      {projects.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <p>
              <a href={item.link} target="_blank">
                {item.name}
              </a>
            </p>
            <img className="video" src={item.video} alt={item.name} />
            <p>
              <a href={item.repository} target="_blank">
                Link to repository
              </a>
            </p>

            <p>{`Tecnology: ${item.tecnology}`}</p>
            <p>{`Description: ${item.description}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
