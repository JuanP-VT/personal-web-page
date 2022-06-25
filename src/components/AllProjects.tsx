import React from "react";
import ProjectCard from "./ProjectCard";

function AllProjects() {
  return (
    <section id="AllProjects">
      <div className="sectionTitle">
        <p>
          All My
          <span className="alter">Projects</span>
        </p>
      </div>
      <div id="projectContainer">
        <ProjectCard />
      </div>
    </section>
  );
}

export default AllProjects;
