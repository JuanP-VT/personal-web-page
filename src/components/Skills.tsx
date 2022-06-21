import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faWrench,
  faBookOpenReader,
} from "@fortawesome/free-solid-svg-icons";
function Skills() {
  return (
    <section id="Skills">
      <div className="sectionTitle">
        <p>
          My
          <span className="alter"> Skills</span>
        </p>
      </div>
      <div className="container">
        <div className="skillBox">
          <FontAwesomeIcon icon={faCode} />
          <p className="title">Languages</p>
        </div>
        <div className="skillBox">
          <FontAwesomeIcon icon={faBookOpenReader} />

          <p className="title">Frameworks/Libraries</p>
        </div>
        <div className="skillBox">
          <FontAwesomeIcon icon={faWrench} />

          <p className="title">Technologies</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
