import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../stylesheet/Experience.css";

function Experience() {
  return (
    <>
      <div className="PageTags">Expériences</div>
    <section className="section-content" id="Experience">
      <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Présent"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Développeur Front-End React</h3>
        <h4 className="vertical-timeline-element-subtitle">Cityviz</h4>
        <p>
          Stacks: React / Hooks, Redux, Redux-Saga, GitLab
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
        Bootcamp sur le métier du développement web, apprentissage React, Node.js, JavaScript, MySQL, Git,
        Github, HTML et CSS avec les méthodes Agile et Scrum.
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
        <p>Management d’une équipe de huit personnes (équipe de sous-traitant multi-technique)</p>
        <p>Management de projet « Rénovation et Travaux »</p>
        <p>Interlocuteur privilégié : clients, prestataires et sous-traitants</p>
        <p>Suivis des budgets de maintenance</p>
        <p>Gamme de maintenance pilotée avec GPLI / MAINTA / SAM FM</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018 - 2019"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Infoway - Expert en affichage dynamique</h3>
        <h4 className="vertical-timeline-element-subtitle">Responsable technique</h4>
        <p>Management de projet national sur site et à distance</p>
        <p>Supervision des déploiements de projets</p>
        <p>Interlocuteur privilégié : Maitre d’œuvres, prestataires, développeurs</p>
        <p>Paramétrage et configuration de l’outil GMAO</p>
        <p>Gestion des demandes utilisateurs</p>
        <p>Suivis des phases recettes et tests</p>
        <p>Gestion et administration des équipements à distances</p>
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
        <p>Membre du comité de direction</p>
        <p>Configuration de l’outil GMAO interne Accor</p>
        <p>Suivis administratif (commande / contrat / énergies)</p>
        <p>Gestion du matériel</p>
        <p>Gestion de projet</p>
        <p>Relation clientèle (gestion de conflit)</p>
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
        <p>Management équipe de neuf personnes</p>
        <p>Suivis administratif (commande)</p>
        <p>Gestion du matériel</p>
        <p>Suivis de projet</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </section>
    </>
  );
}

export default Experience;
