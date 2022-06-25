import React from "react";

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
      <div className="madewith">
        <p>Made with:</p>
        <div className="skills">
          <img src={icon1} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
