import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Project11 from "../img/projects-photos/11-MyWebPage.png";
import jsIcon from "../img/skill-icons/js.png";
import tsIcon from "../img/skill-icons/ts.png";
import htmlIcon from "../img/skill-icons/html.png";
import sassIcon from "../img/skill-icons/sass.png";
import react from "../img/skill-icons/react.png";
function AllProjects() {
  useEffect(() => {
    console.log(Project11);
  }, []);
  return (
    <section id="AllProjects">
      <div className="sectionTitle">
        <p>
          All My
          <span className="alter">Projects</span>
        </p>
      </div>
      <div id="projectContainer">
        <ProjectCard
          coverImgSrc={Project11}
          projectName="Personal WebPage"
          description="desc"
          date="June 2022"
          demoURL="s"
          githubUrl=""
          icon1={tsIcon}
          icon2={react}
          icon3={sassIcon}
        />
      </div>
    </section>
  );
}

export default AllProjects;
