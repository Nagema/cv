import React from "react";
import github from "../assets/images/github.svg";

import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img className="hero-image" src={hero.image} alt="" />
      <div className="card">
        <div>
          <h4>Frontend-developer</h4>
        </div>
        <h1>
          {hero.name} {hero.address}
        </h1>
        <p>{hero.city}</p>
        <p>{hero.birthday}</p>
        <p>
          <a href={"mailto:" + hero.email}>{hero.email}</a>
        </p>
        <p>{hero.phone}</p>
        <p>
          <a href={hero.github}>
            <img className="github-icon" src={github} alt="github" /> GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
