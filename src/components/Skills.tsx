import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faWrench,
  faBookOpenReader,
} from "@fortawesome/free-solid-svg-icons";
import jsIcon from "../img/skill-icons/js.png";
import tsIcon from "../img/skill-icons/ts.png";
import sqlIcon from "../img/skill-icons/sql.png";
import htmlIcon from "../img/skill-icons/html.png";
import cssIcon from "../img/skill-icons/css.png";
import sassIcon from "../img/skill-icons/sass.png";

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
          <div className="skillContainer">
            <ul>
              <li>
                Javascript <img src={jsIcon} alt="javascript icon" />
              </li>
              <li>
                Typescript
                <img src={tsIcon} alt="typescript icon" />
              </li>
              <li>
                SQL
                <img src={sqlIcon} alt="SQL icon" />
              </li>
              <li>
                HTML
                <img src={htmlIcon} alt="HTML icon" />
              </li>
              <li>
                CSS
                <img src={cssIcon} alt="CSS icon" />
              </li>
              <li>
                SASS
                <img src={sassIcon} alt="SASS Icon" />
              </li>
            </ul>
          </div>
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
