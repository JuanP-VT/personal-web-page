import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import LinkedIn from "../img/linkedin.png";
import gitHub from "../img/github.png";
import email from "../img/email.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faLinkedinIn,
  faGithub,
  faGitAlt,
  faGithubSquare,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Home() {
  const el = useRef(null);
  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "Hi!  ,Im A <strong>Web Developer</strong>",
          "Hi!  ,Im A <strong>Former Industrial Engineer</strong>",
          "Hi!  ,Im A <strong>Passionate Learner<strong>",
          "Hi!  ,Im A <strong>Coder<strong>",
        ], // Speed settings, try different values until you get good results
        startDelay: 100,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 200,
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
          My Name Is Juan Pablo And I'm A<br /> Web Developer
        </div>
      </div>

      <div className="socials">
        <div className="Scontainer linkedin">
          <div className="text">LinkedIn</div>
          <div className="iconContainer">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div className="Scontainer github">
          <div className="text">GitHub</div>
          <div className="iconContainer">
            <FontAwesomeIcon icon={faGithubSquare} />
          </div>
        </div>
        <div className="Scontainer email">
          <div className="text">Email</div>
          <div className="iconContainer ">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
