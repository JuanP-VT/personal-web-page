import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Project14 from "../img/projects-photos/14-MyWebPage.png";
import Project13 from "../img/projects-photos/13-Shopping Cart.png";
import project12 from "../img/projects-photos/12-CV Creator.png";
import project11 from "../img/projects-photos/11-Weather App.png";
import project10 from "../img/projects-photos/10-ImageCarousel.png";
import project09 from "../img/projects-photos/9-Library.png";
import project08 from "../img/projects-photos/8-To Do List.png";
import project07 from "../img/projects-photos/7-Restaurant.png";
import project06 from "../img/projects-photos/6-Etch A Sketch.png";
import project05 from "../img/projects-photos/5-TicTacToe.png";
import project04 from "../img/projects-photos/4-RockPaperScissors.png";
import project03 from "../img/projects-photos/3-Dashboad.png";
import project02 from "../img/projects-photos/2-SignUp Page.png";
import project01 from "../img/projects-photos/1-LandingPage.png";

import jsIcon from "../img/skill-icons/js.png";
import tsIcon from "../img/skill-icons/ts.png";
import htmlIcon from "../img/skill-icons/html.png";
import cssIcon from "../img/skill-icons/css.png";
import sassIcon from "../img/skill-icons/sass.png";
import react from "../img/skill-icons/react.png";
import webpackIcon from "../img/skill-icons/webpack.png";
function AllProjects() {
  useEffect(() => {}, []);
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
          coverImgSrc={Project14}
          projectName="Personal WebPage"
          description="My Personal Webpage showcases my work as a developer, I built this site from scratch with CRA"
          date="June 2022"
          demoURL="s"
          githubUrl="https://github.com/JuanP-VT/personal-web-page"
          icon1={tsIcon}
          icon2={react}
          icon3={sassIcon}
        />{" "}
        <ProjectCard
          coverImgSrc={Project13}
          projectName="Shopping Cart App"
          description="Replicates an online shop, it utilizes fortnite's API to get daily deals"
          date="May 2022"
          demoURL="https://juanp-vt.github.io/shop-app/"
          githubUrl="https://github.com/JuanP-VT/shop-app"
          icon1={tsIcon}
          icon2={react}
          icon3={cssIcon}
        />{" "}
        <ProjectCard
          coverImgSrc={project12}
          projectName="Curriculum Template Generator"
          description="Fill the fields to generate a template you can download as PDF"
          date="May 2022"
          demoURL="https://juanp-vt.github.io/cv-app/"
          githubUrl="https://github.com/JuanP-VT/cv-app"
          icon1={tsIcon}
          icon2={react}
          icon3={cssIcon}
        />{" "}
        <ProjectCard
          coverImgSrc={project11}
          projectName="Weather App"
          description="This app allows you to check the current weather and a five days forecast of any place in the world"
          date="April 2022"
          demoURL="https://juanp-vt.github.io/Weather-App/"
          githubUrl="https://github.com/JuanP-VT/Weather-App"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
          icon4={webpackIcon}
        />
        <ProjectCard
          coverImgSrc={project10}
          projectName="Image Carousel"
          description="A common feature found in some websites, a screen that loop through many images"
          date="April 2022"
          demoURL="https://juanp-vt.github.io/Image-Carousel/"
          githubUrl="https://github.com/JuanP-VT/Image-Carousel"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
          icon4={webpackIcon}
        />
        <ProjectCard
          coverImgSrc={project09}
          projectName="Library App"
          description="Creates beautiful cards with book information to keep track of your books"
          date="April 2022"
          demoURL="https://juanp-vt.github.io/Library/"
          githubUrl="https://github.com/JuanP-VT/Library"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
          icon4={webpackIcon}
        />
        <ProjectCard
          coverImgSrc={project08}
          projectName="To Do List App"
          description="Personal activity tracker, allows you to create projects to schedule and manage your activities"
          date="March 2022"
          demoURL="https://juanp-vt.github.io/To-Do-List/"
          githubUrl="https://github.com/JuanP-VT/To-Do-List"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
          icon4={webpackIcon}
        />
        <ProjectCard
          coverImgSrc={project07}
          projectName="Restaurant Page"
          description="A dynamic restaurant page with only javascript"
          date="March 2022"
          demoURL="https://juanp-vt.github.io/Restaurant-Page/"
          githubUrl="https://github.com/JuanP-VT/Restaurant-Page"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
          icon4={webpackIcon}
        />
        <ProjectCard
          coverImgSrc={project06}
          projectName="Etch A Sketch Game"
          description="It allows you to draw in a grid with DOM methods, has many modes"
          date="March 2022"
          demoURL="https://juanp-vt.github.io/ETCH-A-SKETCH/"
          githubUrl="https://github.com/JuanP-VT/ETCH-A-SKETCH"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
          icon4={webpackIcon}
        />
        <ProjectCard
          coverImgSrc={project05}
          projectName="Tic Tac Toe Game"
          description="A simple tic tac toe game vs the cpu"
          date="February 2022"
          demoURL="https://juanp-vt.github.io/Tic-tac-toe/"
          githubUrl="https://github.com/JuanP-VT/Tic-tac-toe"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
        />
        <ProjectCard
          coverImgSrc={project04}
          projectName="Rock Paper Scissors Game"
          description="Best of fives rock paper scissors vs the cpu"
          date="February 2022"
          demoURL="https://juanp-vt.github.io/Rock-Paper-Scissors/"
          githubUrl="https://github.com/JuanP-VT/Rock-Paper-Scissors"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
        />
        <ProjectCard
          coverImgSrc={project03}
          projectName="Admin Dashboard"
          description="Replicates a web dashboard structure"
          date="February 2022"
          demoURL="https://juanp-vt.github.io/Admin-Dashboard/"
          githubUrl="https://github.com/JuanP-VT/Admin-Dashboard"
          icon1={htmlIcon}
          icon2={cssIcon}
        />
        <ProjectCard
          coverImgSrc={project02}
          projectName="Sign Up Page"
          description="Replicates a sign up webpage"
          date="February 2022"
          demoURL="https://juanp-vt.github.io/Sign-up-page/"
          githubUrl="https://github.com/JuanP-VT/Sign-up-page"
          icon1={htmlIcon}
          icon2={cssIcon}
        />
        <ProjectCard
          coverImgSrc={project01}
          projectName="Landing Page"
          description="Replicates a landing webpage"
          date="January 2022"
          demoURL="https://juanp-vt.github.io/Landing-page/"
          githubUrl="https://github.com/JuanP-VT/Landing-page"
          icon1={htmlIcon}
          icon2={cssIcon}
        />
      </div>
    </section>
  );
}

export default AllProjects;
