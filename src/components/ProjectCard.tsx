import React from "react";
import MadeWith from "./MadeWith";

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
  date,
}: Props) {
  return (
    <div className="projectCard">
      <div className="imgContainer">
        <img src={coverImgSrc} alt="Project Demo" />
      </div>
      <p className="name">{projectName}</p>
      <p className="description">{description}</p>
      <MadeWith
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        icon4={icon4}
        icon5={icon5}
      />
      <p className="created">{date}</p>
    </div>
  );
}

export default ProjectCard;
