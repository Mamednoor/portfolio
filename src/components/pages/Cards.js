import React from "react";

// import cookcake from "../../assets/img/CookAndCake.png";
// import goatvschicken from "../../assets/img/GoatvsChicken.png";
// import doctalk from "../../assets/img/doctalk.jpg";
// import pixieWilder from "../../assets/img/PixieWilders.png";
// import reduxtrain from "../../assets/img/redux-train.png";
// import papiercrayon from "../../assets/img/papiercrayon.png";
// import pokedex from "../../assets/img/pokedex.png";


import project from "../../utils/project"
import Link from '../common/Link'
import { CardBoxed, CardContainer, CustomImage, CustomCard, Img, P } from '../common/Card'


function Cards() {
  return (
    <>
      {project.map((item, i) => (
        <CardContainer 
          key={i}
          className="card-container"
        >
          <CardBoxed>
            <CustomImage>
              <Img 
                alt="ScreenProject"
                src={item.image}
              />
            </CustomImage>
            <CustomCard>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{item.name}</h3>
              </Link>
                <P>{item.description}</P>
                <P>{item.stack}</P>
            </CustomCard>
          </CardBoxed>
        </CardContainer>
      ))}
    </>
  );
}

export default Cards;
