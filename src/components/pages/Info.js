import React from "react";

import PDF from "../assets/Mamed-Gohabur-Developpeur-React-Nodejs.pdf";
import profilePicture from "../assets/Profile.jpeg";
import logoCV from "../assets/img/CV.png";
import logoGithub from "../assets/img/Github.png";
import logoLinkedin from "../assets/img/Linkedin.png";
import logoMail from "../assets/img/Mail.png";

import "../stylesheet/Info.css";

function Info() {
  return (
    <section id="Info">
      <div className="profile-header">
      <div className="div-header-picture">
        <img src={profilePicture} className="profile-picture" alt="Profile" />
      </div>

        <div className="div-profile-header">
          <p className="p-content">
            Je suis Développeur Fullstack passionné de nouvelle technologies.
          </p>
          <p className="p-content">
            En tant que passioné, je m'éfforce à écrire des code simple et lisible
          </p>
          <p className="p-content">
            En tant que curieux, je reste à l'affût des nouvelles technologies et je reste en apprentissage constant
          </p>

          <div className="div-info-link">
            <a
              className="a-info"
              href="https://www.linkedin.com/in/mamednoorgohabur/"
              target="_blank"
              rel="noopener noreferrer"
            >
          <img className="imginfo" src={logoLinkedin} alt="LinkedIn" />
            </a>
            <a className="a-info" href={PDF}>
            <img className="imginfo" src={logoCV} alt="CV" />
            </a>
            <a
            className="a-info"
            href="https://github.com/Mamednoor"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img className="imginfo" src={logoGithub} alt="Github" />
          </a>
            <a
              className="a-info"
              href="mailto:mamed.gohabur@gmail.com"
              rel="noopener noreferrer"
            >
            <img className="imginfo" src={logoMail} alt="Mail" />
            </a>
          </div>
        </div>
      </div>
      {/* <fieldset>
      <legend>Citation</legend>
        <div className="profile-tagline">
          <p>La plus grande gloire n’est pas de ne jamais tomber, mais de se relever
          à chaque chute.</p>
          <p>- Nelson Mandela</p>
        </div>
      </fieldset> */}
    </section>
  );
}

export default Info;
