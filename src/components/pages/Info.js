import React from "react";

import profilePicture from "../assets/61501155.jpeg";
import "../stylesheet/Info.css";

function Info() {
  return (
    <section id="Info">
      <div className="profile-header">
        <img src={profilePicture} className="profile-picture" alt="Profile" />
        <div className="profile-tagline">La plus grande gloire n’est pas de ne jamais tomber, mais de se relever à chaque chute. (Nelson Mandela)</div>
      </div>
    </section>
  );
}

export default Info;
