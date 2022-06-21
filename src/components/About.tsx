import React from "react";
import iEngineer from "../img/IEngineer.jpg";
function About() {
  return (
    <section id="About">
      <div className="sectionTitle">
        <p>
          <span className="alter">About</span> Me
        </p>
      </div>
      <div className="container">
        <div className="c1">
          <div className="title">Background As A Industrial Engineer</div>
          <div className="textContainer">
            <p>
              In the summer of 2014 a young man had to choose a path for his
              professional career, I always were a tech geek so naturally I was
              leaning into <span>Software Engineering</span> or a related field
              but I also had huge desire to become like my older brother, I did
              not know much about the world or even much about myself at that
              age so, partially blinded I went with my brother's advice to
              become a<span className="highlight">Industrial Engineer</span>.
            </p>
            <br />
            <p>
              Although at some points I felt many topics were not very
              interesting my <span>discipline</span> kept me strong and boosted
              through my education. By the end of 2018 I got my{" "}
              <span>Bachelors degree</span>, flew to Tijuana(one of the biggest
              industrial cities in the country) and worked there for nearly two
              years.
            </p>
            <br />
            <p>
              Despite doing fine I felt very unfulfilled by my professional life
              and the overall environment of the manufacturing industry, the
              next few months my life felt very gray, the choice that a
              unexperienced sprout took many years back, felt like chains that
              would keep me bound to that situation.
            </p>
            <br />
            <p>But Im resilient and knew I had to do something about it...</p>
          </div>
          <div className="imgContainer">
            <img src={iEngineer} alt="IndustrialEngineer" className="img" />
          </div>
        </div>
        <div className="c2">
          <div className="title">Becoming A Web Developer</div>
          <div className="imgContainer"></div>
          <div className="textContainer"></div>
        </div>
        <div className="c3">
          <div className="title">Personal Traits</div>
          <div className="imgContainer"></div>
          <div className="textContainer"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
