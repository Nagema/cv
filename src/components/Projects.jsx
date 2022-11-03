import React from "react";

const Projects = ({ projects }) => {
  return (
    <div className="more-section projects card">
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
  );
};

export default Projects;
