import React from "react";
import Madewith from "./Madewith";

type Props = {
  coverImgSrc: string;
  projectName: string;
  description: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;
  icon4?: string;
  icon5?: string;
  date: string;
  demoURL: string;
  githubUrl: string;
};

function ProjectCard({
  coverImgSrc,
  projectName,
  description,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
}: Props) {
  return (
    <div className="projectCard">
      <div className="imgContainer">
        <img src={coverImgSrc} alt="Project Demo" />
      </div>
      <p className="name">{projectName}</p>
      <p className="description">{description}</p>
      <Madewith
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        icon4={icon4}
        icon5={icon5}
      />
    </div>
  );
}

export default ProjectCard;
