import React from "react";
import LinkedIn from "../img/linkedin.png";
import gitHub from "../img/github.png";
import emial from "../img/email.png";
function Home() {
  return (
    <section id="Home">
      <div className="container">
        <div className="wrapper">
          <div className="static-txt">Hi !, I'm a</div>
          <ul className="dynamic-txts">
            <li>
              <span>Former Industrial Engineer</span>
            </li>
            <li>
              <span>Web Developer</span>
            </li>
            <li>
              <span>Coder</span>
            </li>
            <li>
              <span>Passionate Learner</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="socials">
        <div className="Scontainer linkedin">
          <div className="text">LinkedIn</div>
          <div className="iconContainer">
            <img src={LinkedIn} alt="Linkedin icon" />
          </div>
        </div>
        <div className="Scontainer github">
          <div className="text">GitHub</div>
          <div className="iconContainer">
            <img src={gitHub} alt="Linkedin icon " />
          </div>
        </div>
        <div className="Scontainer email">
          <div className="text">Email</div>
          <div className="iconContainer ">
            <img src={emial} alt="Linkedin icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
