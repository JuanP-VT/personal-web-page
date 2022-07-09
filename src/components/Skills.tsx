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
import nodeJsIcon from "../img/skill-icons/node.png";
import expressIcon from "../img/skill-icons/express.png";
import mongoIcon from "../img/skill-icons/mongo.jpg";
import jestIcon from "../img/skill-icons/jest.png";
import reacticon from "../img/skill-icons/react.png";
import gitIcon from "../img/skill-icons/git.png";
import webpackIcon from "../img/skill-icons/webpack.png";
import canvas from "../img/skill-icons/canva.png";
import wslIcon from "../img/skill-icons/wsl.jpg";
import linuxIcon from "../img/skill-icons/Linux.jpg";
import javaIcon from "../img/skill-icons/java.png";

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
                Java <img src={javaIcon} alt="javascript icon" />
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
          <div className="skillContainer">
            <ul>
              <li>
                React.JS <img src={reacticon} alt="react icon" />
              </li>
              <li>
                NodeJS
                <img src={nodeJsIcon} alt="node icon" />
              </li>
              <li>
                ExpressJS
                <img src={expressIcon} alt="expressJs icon" />
              </li>
              <li>
                MongoDB
                <img src={mongoIcon} alt="MongoDB icon" />
              </li>
              <li>
                Jest
                <img src={jestIcon} alt="Jest icon" />
              </li>
            </ul>
          </div>
        </div>
        <div className="skillBox">
          <FontAwesomeIcon icon={faWrench} />

          <p className="title">Technologies</p>
          <div className="skillContainer">
            <ul>
              <li>
                Git <img src={gitIcon} alt="git icon" />
              </li>
              <li>
                Webpack
                <img src={webpackIcon} alt="webpack icon" />
              </li>
              <li>
                Canva
                <img src={canvas} alt="canva icon" />
              </li>
              <li>
                WSL
                <img src={wslIcon} alt="wsl icon" />
              </li>
              <li>
                Ubuntu/Linux
                <img src={linuxIcon} alt="linux icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
