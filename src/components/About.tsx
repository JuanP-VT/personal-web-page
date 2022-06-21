import React from "react";
import iEngineer from "../img/IEngineer.jpg";
import iDeveloper from "../img/IDeveloper.webp";
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
          <div className="imgContainer">
            <img src={iEngineer} alt="IndustrialEngineer" className="img" />
          </div>

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
        </div>
        <div className="c2">
          <div className="title">Becoming A Web Developer</div>
          <div className="imgContainer">
            {" "}
            <img src={iDeveloper} alt="Computer and coffee" className="img" />
          </div>
          <div className="textContainer">
            <p>
              During that time one of my closest friends lived a very similar
              situation, he was working as a plant maintenance engineer and felt
              very unsatisfied, he later switched fields and became a software
              tester.
            </p>
            <br />
            <p>
              His new situation and work environment put him in a good mood so
              he tried to convince me to leave the manufacturing field and
              become a <span>developer</span>, but at that time I wasn't ready
              to drop nearly 7 years of education and experience.
            </p>
            <p>
              <br />
              But the idea stood with me, I come from a
              <span>tech background</span>, always were interested in
              videogames, technology, computers and even had some{" "}
              <span>coding</span>
              experience with C (school education) and Lua (I used code in
              Minecraft's computercraft mod and I loved it), after a few months
              of research,talks and analysis it was clear, that idea became a
              light ray that ignited my ambition for my professional life.
            </p>
            <br />
            It was settle <span>I would become a Developer.</span>
          </div>
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
