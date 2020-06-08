import React from "react";

import PDF from "../assets/Mamed-Gohabur-Developpeur-FullStack.pdf";
import profilePicture from "../assets/Profile.jpeg";

import "../stylesheet/Info.css";

function Info() {
  return (
    <section id="Info">
      <div className="profile-header">
        <div className="profile-tagline">
          La plus grande gloire n’est pas de ne jamais tomber, mais de se
          relever à chaque chute. (Nelson Mandela)
        </div>
        <img src={profilePicture} className="profile-picture" alt="Profile" />
      </div>
      <div>
        <p className="p-content">
          Un profil atypique, enthousiaste et dynamique.
        </p>
        <p className="p-content">
          Après plusieurs vies professionnelles mais surtout passionné par les
          nouvelles technologies qui ne cesse d'évoluer, aimant apprendre et
          rester à l'affut des nouveautés.
        </p>
        <p className="p-content">
          et une formation à la{" "}
          <a href="https://www.wildcodeschool.com/fr-FR/formations/developpeur-web?campus=paris">
            {" "}
            WildCodeSchool Paris 75005{" "}
          </a>
          sur les langages React, Node.js, JavaScript, MySQL, Git, Github, HTML
          et CSS avec les méthodes Agile et Scrum
        </p>
        <p className="p-content">
          Apprenez-en plus ou contactez moi directement avec les liens ci-desous
        </p>
        <div className="div-info-link">
          <a
            className="a-info"
            href="https://www.linkedin.com/in/mamednoorgohabur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-info">LinkedIn</button>
          </a>
          <a className="a-info" href={PDF}>
            <button className="btn-info">Curriculum Vitae</button>
          </a>
          <a
            className="a-info"
            href="mailto:mamed.gohabur@gmail.com"
            rel="noopener noreferrer"
          >
            <button className="btn-info">Mail</button>
          </a>
        </div>
        <p className="p-content">
          <em>
            Spoiler Alert je suis peut-être disponible n'hésitez pas contactez
            moi
          </em>
        </p>
      </div>
    </section>
  );
}

export default Info;
