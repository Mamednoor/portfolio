import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Title from '../common/Title';
import "../stylesheet/Experience.css";

function Experience() {
  return (
    <>
      <Title>Expériences</Title>
    <section className="section-content" id="Experience">
      <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Présent"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Développeur Front-End React, React-Native</h3>
        <h4 className="vertical-timeline-element-subtitle">Cityviz</h4>
        <p>
        - Création de composants pour instaurer de nouveau écrans React.js & React-native.<br/>
        - Création et ajout de nouvelles fonctionnalités.<br/>
        - Création et modification de endpoint sur API.<br/>
        - Résolution de bug.<br/>
        Stack : React.js, React-Native, Redux, Redux-Saga, Python, PostgreSQL, Docker, YouTrack, GitLab
        </p>
      </VerticalTimelineElement>  
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="03-2020 07-2020"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Développeur web et web mobile</h3>
        <h4 className="vertical-timeline-element-subtitle">Wild Code School</h4>
        <p>
          - Bootcamp sur le métier du développement web, apprentissage React, Node.js, JavaScript, MySQL, Git,
          Github, HTML et CSS avec les méthodes Agile et Scrum.<br/>
          - Apprentissage par la pratique en réalisant des projets individuelle et collectif
          ainsi que la réalisation d'un projet client
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - 2020"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Dalkia - Group EDF</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Paris - France
        </h4>
        <p>
        - Management d’une équipe de huit personnes (équipe de sous-traitant multi-technique)<br/>
        - Management de projet « Rénovation et Travaux »<br/>
        - Interlocuteur privilégié : clients, prestataires et sous-traitants<br/>
        - Suivis des budgets de maintenance<br/>
        - Gamme de maintenance pilotée avec GPLI / MAINTA / SAM FM
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018 - 2019"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Infoway - Expert en affichage dynamique</h3>
        <h4 className="vertical-timeline-element-subtitle">Responsable technique</h4>
        <p>
        - Management de projet national sur site et à distance<br/>
        - Supervision des déploiements de projets<br/>
        - Interlocuteur privilégié : Maitre d’œuvres, prestataires, développeurs<br/>
        - Paramétrage et configuration de l’outil GMAO<br/>
        - Gestion des demandes utilisateurs<br/>
        - Suivis des phases recettes et tests<br/>
        - Gestion et administration des équipements à distances
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2015 - 2017"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Ibis Bercy village</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Responasble technique
        </h4>
        <p>
        - Membre du comité de direction<br/>
        - Configuration de l’outil GMAO interne Accor<br/>
        - Suivis administratif (commande / contrat / énergies)<br/>
        - Gestion du matériel<br/>
        - Gestion de projet<br/>
        - Relation clientèle (gestion de conflit)<br/>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2011 - 2015"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Mercure Paris centre Tour Eiffel
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Assistant responsable technique</h4>
        <p>
        - Management équipe de neuf personnes<br/>
        - Suivis administratif (commande)<br/>
        - Gestion du matériel<br/>
        - Suivis de projet
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </section>
    </>
  );
}

export default Experience;
