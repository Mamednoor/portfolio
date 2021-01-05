import React from "react";
import Cards from "./Cards";
import Centered from '../common/Centered'

function PortFolio() {
  return (
    <section id="PortFolio">
      <div className="PageTags">PortFolio</div>
      <Centered>
        <Cards />
      </Centered>
    </section>
  );
}

export default PortFolio;
