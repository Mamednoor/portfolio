import React from "react";
import Cards from "./Cards";
import Centered from "../common/Centered";
import Section from "../common/Section";
import Title from "../common/Title";

function PortFolio() {
  return (
    <>
      <Title 
        id="PortFolio"
      >
        PortFolio
      </Title>
      <Section>
        <Centered>
          <Cards />
        </Centered>
      </Section>
    </>
  );
}

export default PortFolio;
