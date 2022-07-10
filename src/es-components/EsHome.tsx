import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function EsHome() {
  const el = useRef(null);
  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "Hola! Soy  <strong>Desarrollador Web</strong>",
          "Hola! Soy  <strong>Ingeniero Industrial</strong>",
          "Hola! Soy Un <strong>Apasionado<strong>",
          "Hola! Soy Un <strong>Coder<strong>",
          "Hola! Soy  <strong>Juan Pablo<strong>",
        ], // Speed settings
        startDelay: 100,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 600,
        loop: true,
      });

      // Destroying
      return () => {
        typed.destroy();
      };
    }
  }, []);
  return (
    <section id="Home">
      <div className="container">
        <div id="textAnimation">
          <span ref={el}></span>
        </div>
        <div className="info">
          My Nombre Es Juan Pablo Y Soy Un <br /> Desarrollador Web
        </div>
        <div className="btnContainer">
          <a
            href="https://drive.google.com/file/d/1UIj4nAZsHQFlVahkbhRKAqf5kJuL9Udi/view?usp=sharing  "
            download={true}
            className="cv"
          >
            Descargar CV
          </a>
          <a href="#ShowCase" className="project">
            Ver Proyectos
          </a>
        </div>
      </div>

      <div className="socials">
        <a
          href="https://www.linkedin.com/in/juan-pablo-valdez-torres-0a1194242/"
          className="Scontainer linkedin"
        >
          <div className="text">LinkedIn</div>
          <div className="iconContainer">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </a>
        <a href="https://github.com/JuanP-VT" className="Scontainer github">
          <div className="text">GitHub</div>
          <div className="iconContainer">
            <FontAwesomeIcon icon={faGithubSquare} />
          </div>
        </a>
        <a href="mailto:cv.juanp@gmail.com" className="Scontainer email">
          <div className="text">Email</div>
          <div className="iconContainer ">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </a>
      </div>
    </section>
  );
}

export default EsHome;
