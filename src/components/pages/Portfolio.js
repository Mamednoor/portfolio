import React from "react";
import Cards from "./Cards";
import Centered from "../common/Centered";
import Section from "../common/Section";
import Title from "../common/Title";

function Portfolio() {
  return (
    <>
      <Title id="Portefolio">
      Portefolio
      </Title>
      <Section>
        <Centered>
          <Cards />
        </Centered>
      </Section>
    </>
  );
}

export default Portfolio;
