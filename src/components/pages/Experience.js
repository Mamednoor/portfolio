import React from "react";

import PDF from "../assets/Mamed-Gohabur-Developpeur-FullStack.pdf";

function Experience() {
  return (
    <section className="section-content" id="Experience">
      <div className="PageTags">Experiences</div>
      <p className="p-contain">
        Aillant travaillé dans plusieurs domaines d'activité tel que
        l'industrie, hôtellerie et l'informatique ainsi que le milieu de la
        santé, ou j'ai pu apprendre différentes méthodologies de travail,
        manager des équipes de techniciens et de sous-traitant. ces diverses
        expériences qui m'ont permis de grandir professionnellement en acquérant
        de nouvelle compétences. l'autonomie, la curiosité ainsi que la
        proactivité sont des atouts qui m'ont permis d’évoluer dans mon
        parcours. 
      </p>
      <p className="p-contain">Telecharger la derniere version de mon Curriculum Vitae avec le lien ci-dessous</p>
      <a className="a-info p-contain" href={PDF}>
        <button className="btn-exp">Curriculum Vitae</button>
      </a>
    </section>
  );
}

export default Experience;
