import React from "react";

import profilePicture from "../assets/61501155.jpeg";
import "../stylesheet/Info.css";

function Info() {
  return (
    <section id="Info">
      <div className="profile-header">
        <img src={profilePicture} className="profile-picture" alt="Profile" />
        <div className="profile-tagline"></div>
      </div>
      <p className="p-contain">
        Aillant travaillé dans plusieurs domaines d'activité tel que
        l'industrie, hôtellerie et l'informatique ainsi que le milieu de la
        santé, ou j'ai pu apprendre différentes méthodologies de travail,
        manager des équipes de techniciens et de sous-traitant. ces diverses
        experiences qui m'ont permis de grandir professionnellement en acquérant
        de nouvelle compétences. l'autonomie, la curiosité ainsi que la
        proactivité sont des atouts qui m'ont permis d’évoluer dans mon
        parcours. Je vous laisse prendre connaissance plus en détails de mon
        profil avec les liens ci-dessous.
      </p>
    </section>
  );
}

export default Info;
