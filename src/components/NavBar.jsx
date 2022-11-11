import React, { useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBugSlash } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-close-menu.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const isWide = useMediaQuery({
    query: "(min-width: 824px)",
  });

  const [menuIcon, setMenuIconToggle] = useState(true);

  const handleMenuIcon = () => {
    setMenuIconToggle(!menuIcon);
  };

  return (
    <nav className="navbar-container">
      <a href="/">
        <div className="logo-wrapper">
          <div className="logo-icon">
            <FontAwesomeIcon icon={faBugSlash} />
          </div>
          <div className="navbar-title">
            Angelica <span>Cavero</span>
          </div>
        </div>
      </a>

      {menuIcon && !isWide ? (
        <button className="toggle-button" onClick={handleMenuIcon}>
          <img className="toggle-button-menu" src={iconMenu} alt="open menu" />
        </button>
      ) : (
        <div className="menu-navbar-list">
          {!isWide && (
            <button className="toggle-button" onClick={handleMenuIcon}>
              <img
                className="toggle-button-close"
                src={iconClose}
                alt="close menu"
              />
            </button>
          )}

          <div className="buttons-wrapper">
            <NavLink className="button-opt" value="education" to={"/education"}>
              Education
            </NavLink>

            <NavLink
              className="button-opt"
              value="experience"
              to={"/experience"}
            >
              Experience
            </NavLink>

            <NavLink className="button-opt" value="knowledge" to={"/knowledge"}>
              Knowledge
            </NavLink>
            <NavLink className="button-opt" value="projects" to={"/projects"}>
              Projects
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
