import React from "react";

import PDF from "../assets/Mamed-Gohabur-Developpeur-React-Nodejs.pdf";
import profilePicture from "../assets/Profile.jpeg";
import logoCV from "../assets/img/CV.png";
import logoGithub from "../assets/img/github.svg";
import logoLinkedin from "../assets/img/linkedin.svg";
import logoMail from "../assets/img/mail.jpg";

import "../stylesheet/Info.css";

function Info() {
  return (
    <section id="Info">
      <div className="profile-header">
        <div className="div-header-picture">
          <img src={profilePicture} className="profile-picture" alt="Profile" />
        </div>
        <div className="div-profile-header">
          {/* <p className="p-content">
            Je suis Développeur Fullstack passionné de nouvelle technologies.
            En tant que passioné, je m'éfforce à écrire des code simple et lisible.
            En tant que curieux, je reste à l'affût des nouvelles technologies et je reste en apprentissage constant.
          </p> */}

          <p className="p-content">
            Fort d’une expérience de 9 ans la gestion technique et maintenance
            de patrimoine ainsi que le déploiement de produit informatique et
            digital sur le plan national avec l’utilisation de plusieurs outils
            GMAO, j’ai décidé d’acquérir des compétences dans le développements
            web.
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
    </section>
  );
}

export default Info;
