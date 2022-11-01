import React from "react";
import "./More.css";
const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="card">
      <div>
        <h4>Languages</h4>
        <p>{languages.language}</p>
        <p>Writing: {languages.wrlevel}</p>
        <p>Speaking: {languages.splevel}</p>
      </div>
      <h4>Skills</h4>
      <div>
        {habilities.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h4>Volunteer</h4>
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
