import React from "react";

type Props = {
  coverImgSrc: string;
  name: string;
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

function ProjectCard({}: Props) {
  return <div className="projectCard">ProjectCard</div>;
}

export default ProjectCard;
