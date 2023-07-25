import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/about-me-img.jpg";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__m-image">
            <img src={ME} alt="About imag" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experinece</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icons" />
              <h5>Clinets</h5>
              <small>50+ WorldWide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Passionate junior front-end developer with a desire to learn and
            grow in a collaborative team environment. Skilled in HTML, CSS, and
            JavaScript. Excels at creating pixel-perfect designs and working
            with cross-browser compatibility issues
          </p>

          <a id="talk-btn" href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
