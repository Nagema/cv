import React from "react";
import { NavLink } from "react-router-dom";

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
        <div className="about-container">
          {hero.aboutMe.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <p>{item.info}</p>
              </div>
            );
          })}
          <div className="hero-links-container">
            <a type="button" className="hero-link">
              Download CV
            </a>
            <NavLink className="hero-link">Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
