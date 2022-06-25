import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
type Props = {
  demoUrl: string;
  githubUrl: string;
};

function ProjectCardButtons({ githubUrl, demoUrl }: Props) {
  return (
    <div id="projectCardButtons">
      <a href={demoUrl}>
        <div className="container">
          <p>Demo</p>
          <FontAwesomeIcon icon={faEye} />
        </div>
      </a>
    </div>
  );
}

export default ProjectCardButtons;
