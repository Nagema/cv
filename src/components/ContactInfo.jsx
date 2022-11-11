import React from "react";
import "./ContactInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const itemIcon = {
  faLinkedin,
  faGithub,
  faTwitter,
};
const ContactInfo = ({ socialNetworking, heroInfo }) => {
  return (
    <div className="contact-info">
      <div className="social-network-container">
        {socialNetworking.map((item) => {
          return (
            <div
              className="social-network-container"
              key={JSON.stringify(item)}
            >
              <a href={item.url}>
                <FontAwesomeIcon icon={itemIcon[item.icon]} />
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
      <div>
        <a href={`mailto:${heroInfo.email}`}>{heroInfo.email}</a>
      </div>
    </div>
  );
};

export default ContactInfo;
