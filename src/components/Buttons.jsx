import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHouseLaptop,
  faCode,
  faA,
} from "@fortawesome/free-solid-svg-icons";

const Buttons = ({ showInfo }) => {
  return (
    <nav className="navbar-container">
      <div>
        <a href="/">
          <div></div>
          <div>
            Angelica <span>Cavero</span>
          </div>
        </a>
      </div>
      <div className="buttons-wrapper">
        <button className="button-opt" value="education" onClick={showInfo}>
          <FontAwesomeIcon icon={faGraduationCap} /> Education
        </button>

        <button className="button-opt" value="experience" onClick={showInfo}>
          <FontAwesomeIcon icon={faHouseLaptop} /> Experience
        </button>

        <button className="button-opt" value="knowledge" onClick={showInfo}>
          <FontAwesomeIcon icon={faCode} /> Knowledge
        </button>

        <button className="button-opt" value="projects" onClick={showInfo}>
          <FontAwesomeIcon icon={faCode} /> Projects
        </button>
      </div>
    </nav>
  );
};

export default Buttons;
