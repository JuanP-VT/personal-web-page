import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";
type Props = {
  demoUrl: string;
  githubUrl: string;
};

function ProjectCardButtons({ githubUrl, demoUrl }: Props) {
  return (
    <div id="projectCardButtons">
      <a href={demoUrl}>
        <div className="container">
          <FontAwesomeIcon icon={faEye} />
          <p>Demo</p>
        </div>
      </a>
      <a href={githubUrl}>
        <div className="container">
          <FontAwesomeIcon icon={faCode} />
          <p>GitHub</p>
        </div>
      </a>
    </div>
  );
}

export default ProjectCardButtons;
