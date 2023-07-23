import React, { useEffect } from "react";
import EsProjectCard from "../es-components/EsProjectCard";
import Project15 from "../img/projects-photos/15 - ECommerce.png";
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
import nextJs from "../img/skill-icons/nexticon.png";
import mongoDb from "../img/skill-icons/mongo.jpg";
import tailwind from "../img/skill-icons/tailwind.png";
function EsAllProjects() {
  useEffect(() => {}, []);
  return (
    <section id="AllProjects">
      <div className="sectionTitle">
        <p>
          Mis
          <span className="alter">Proyectos</span>
        </p>
      </div>
      <div className="txtContainer">
        <p>
          <span>Nota</span>: aquí puedes ver mi progreso como desarrollador web.
        </p>
        <p>
          <br /> El <span>botón de GitHub</span> lo llevará al repositorio del
          proyecto, allí puede ver un archivo Léame con una breve descripción,
          el objetivo del proyecto y el historial de "Commits" como prueba de
          que fue hecho por mí.
        </p>
        <br />{" "}
        <p>
          Además, el <span>botón Demo</span> mostrará una versión en vivo de la
          aplicación.
        </p>
      </div>

      <div id="projectContainer">
        <EsProjectCard
          coverImgSrc={Project15}
          projectName="Pc - Hub"
          description="Prototipo funcional de ECommerce"
          date="Julio 2023"
          demoURL="https://store-juanp-vt.vercel.app/"
          githubUrl="https://github.com/JuanP-VT/pc-ecommerce"
          icon1={tsIcon}
          icon2={react}
          icon3={nextJs}
          icon4={mongoDb}
          icon5={tailwind}
        />
        <EsProjectCard
          coverImgSrc={Project14}
          projectName="Web Personal"
          description="Mi Webpage personal es mi introducción al mundo profesional"
          date="Junio 2022"
          demoURL="s"
          githubUrl="https://github.com/JuanP-VT/personal-web-page"
          icon1={tsIcon}
          icon2={react}
          icon3={sassIcon}
        />{" "}
        <EsProjectCard
          coverImgSrc={Project13}
          projectName="App Tienda Online"
          description="Replica a una tienda en linea, toma data de la API de fortnite"
          date="Mayo 2022"
          demoURL="https://juanp-vt.github.io/shop-app/"
          githubUrl="https://github.com/JuanP-VT/shop-app"
          icon1={tsIcon}
          icon2={react}
          icon3={cssIcon}
        />{" "}
        <EsProjectCard
          coverImgSrc={project12}
          projectName="Generador de Plantillas CV"
          description="Rellene los campos para generar una plantilla que puede descargar como PDF"
          date="Mayo 2022"
          demoURL="https://juanp-vt.github.io/cv-app/"
          githubUrl="https://github.com/JuanP-VT/cv-app"
          icon1={tsIcon}
          icon2={react}
          icon3={cssIcon}
        />{" "}
        <EsProjectCard
          coverImgSrc={project11}
          projectName="App del Clima"
          description="Esta aplicación le permite consultar el clima actual y un pronóstico de cinco días de cualquier lugar del mundo"
          date="Abril 2022"
          demoURL="https://juanp-vt.github.io/Weather-App/"
          githubUrl="https://github.com/JuanP-VT/Weather-App"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
          icon4={webpackIcon}
        />
        <EsProjectCard
          coverImgSrc={project10}
          projectName="Carrousel de Imágenes"
          description="Una característica común que se encuentra en algunos sitios web, una pantalla que clicla por imágenes"
          date="Abril 2022"
          demoURL="https://juanp-vt.github.io/Image-Carousel/"
          githubUrl="https://github.com/JuanP-VT/Image-Carousel"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
          icon4={webpackIcon}
        />
        <EsProjectCard
          coverImgSrc={project09}
          projectName="App Librería"
          description="Crea hermosas tarjetas con información de libros para un seguimiento de tu librería."
          date="Abril 2022"
          demoURL="https://juanp-vt.github.io/Library/"
          githubUrl="https://github.com/JuanP-VT/Library"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
          icon4={webpackIcon}
        />
        <EsProjectCard
          coverImgSrc={project08}
          projectName="App Lista de Actividades"
          description="Rastreador de actividad personal, le permite crear proyectos para programar y administrar sus actividades"
          date="Marzo 2022"
          demoURL="https://juanp-vt.github.io/To-Do-List/"
          githubUrl="https://github.com/JuanP-VT/To-Do-List"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
          icon4={webpackIcon}
        />
        <EsProjectCard
          coverImgSrc={project07}
          projectName="Pagina de Restaurante"
          description="Una página de restaurante dinámica con vainilla javascript"
          date="Marzo 2022"
          demoURL="https://juanp-vt.github.io/Restaurant-Page/"
          githubUrl="https://github.com/JuanP-VT/Restaurant-Page"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
          icon4={webpackIcon}
        />
        <EsProjectCard
          coverImgSrc={project06}
          projectName="Etch A Sketch Game"
          description="Te permite dibujar en una pantalla con métodos DOM, tiene muchos modos de uso"
          date="Marzo 2022"
          demoURL="https://juanp-vt.github.io/ETCH-A-SKETCH/"
          githubUrl="https://github.com/JuanP-VT/ETCH-A-SKETCH"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
          icon4={webpackIcon}
        />
        <EsProjectCard
          coverImgSrc={project05}
          projectName="Tic Tac Toe Game"
          description="El Juego del Gato"
          date="Febrero 2022"
          demoURL="https://juanp-vt.github.io/Tic-tac-toe/"
          githubUrl="https://github.com/JuanP-VT/Tic-tac-toe"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
        />
        <EsProjectCard
          coverImgSrc={project04}
          projectName="Piedra, Papel o Tijera"
          description="Piedra, Papel, Tijera vs CPU"
          date="Febrero 2022"
          demoURL="https://juanp-vt.github.io/Rock-Paper-Scissors/"
          githubUrl="https://github.com/JuanP-VT/Rock-Paper-Scissors"
          icon1={jsIcon}
          icon2={htmlIcon}
          icon3={cssIcon}
        />
        <EsProjectCard
          coverImgSrc={project03}
          projectName="Admin Dashboard"
          description="Replica un la admin dashboard"
          date="Febrero 2022"
          demoURL="https://juanp-vt.github.io/Admin-Dashboard/"
          githubUrl="https://github.com/JuanP-VT/Admin-Dashboard"
          icon1={htmlIcon}
          icon2={cssIcon}
        />
        <EsProjectCard
          coverImgSrc={project02}
          projectName="Pagina de Iniciar Sesión"
          description="Replicates una página de iniciar sesión"
          date="Febrero 2022"
          demoURL="https://juanp-vt.github.io/Sign-up-page/"
          githubUrl="https://github.com/JuanP-VT/Sign-up-page"
          icon1={htmlIcon}
          icon2={cssIcon}
        />
        <EsProjectCard
          coverImgSrc={project01}
          projectName="Página de Inicio"
          description="Replica una página de inicio"
          date="Enero 2022"
          demoURL="https://juanp-vt.github.io/Landing-page/"
          githubUrl="https://github.com/JuanP-VT/Landing-page"
          icon1={htmlIcon}
          icon2={cssIcon}
        />
      </div>
    </section>
  );
}

export default EsAllProjects;
