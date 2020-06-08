import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../stylesheet/Experience.css";

function Experience() {
  return (
    <section className="section-content" id="Experience">
      <div className="PageTags">Experiences</div>
      <VerticalTimeline>  
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - present"
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Dans votre entreprise peut-être</h3>
        <h4 className="vertical-timeline-element-subtitle">Développeur Fullstack</h4>
        <p>
          Dans votre entreprise, avec vos missions.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2020 - present"
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
        <h3 className="vertical-timeline-element-title">Dalkia</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Paris - France
        </h4>
        <p>
          Manager
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018 - 2019"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Infoway - Expert en affichage dynamique</h3>
        <h4 className="vertical-timeline-element-subtitle">Saint-Denis - France</h4>
        <p>Responsable Technique</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2015 - 2017"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Ibis Bercy village</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Paris - France
        </h4>
        <p>Responsable Technique</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2011 - 2015"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Mercure Paris centre Tour Eiffel
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Paris - France</h4>
        <p>Assistant Responsable Technique</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2008 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Cegelec
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Creteil / Nanterre - France</h4>
        <p>Technicien de maintenance</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "black", color: "#fff" }}
      />
    </VerticalTimeline>
    </section>
  );
}

export default Experience;
