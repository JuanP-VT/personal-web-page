import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Home() {
  const el = useRef(null);
  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "Hi!  ,Im A <strong>Web Developer</strong>",
          "Hi!  ,Im A <strong>Industrial Engineer</strong>",
          "Hi!  ,Im A <strong>Passionate Learner<strong>",
          "Hi!  ,Im A <strong>Coder<strong>",
          "Hi!  ,Im  <strong>Juan Pablo<strong>",
        ], // Speed settings
        startDelay: 100,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 400,
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
      <div id="update">
        🎉🥳🎂🎈 As Of July 24 This web is now 1 year old, <br />
        Currently reworking it from scratch! 🎊🎉🥳🎂🎈🎊
      </div>
      <div className="container">
        <div id="textAnimation">
          <span ref={el}></span>
        </div>
        <div className="info">
          My Name Is Juan Pablo And I'm A<br /> Web Developer
        </div>
        <div className="btnContainer">
          <a href="#ShowCase" className="project">
            View Projects
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

export default Home;
