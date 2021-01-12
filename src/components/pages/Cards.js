import React from "react";
import styled from "styled-components";

// import cookcake from "../assets/img/CookAndCake.png";
// import goatvschicken from "../assets/img/GoatvsChicken.png";
// import doctalk from "../assets/img/doctalk.jpg";
// import pixieWilder from "../assets/img/PixieWilders.png";
// import reduxtrain from "../assets/img/redux-train.png";
// import papiercrayon from "../assets/img/papiercrayon.png";

import project from "../../utils/project";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
  width: max-content;
  border: 2px solid white;

  @media (max-width: 768px) {
    display:flex;
    flex-direction:column;
  }
`;

const CardBoxed = styled.div`
  background: black;
  font-size: 15px;
  max-width: 350px;
  height: 468px;
  overflow: hidden;
  position: relative;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;

`;

const CustomImage = styled.div`
  height: 224px;
  text-align: center;
  background-color: papayawhip;
  > .img-card {
    width: 100%;
    height: 100%;
  }
`;
const CustomCard = styled.div`
  justify-content: space-around;
  text-align: center;
  padding: 24px;
  > .p-card {
    margin: 10px;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  }
  > .a-card {
    color: white;
    font-size: 20px;
    font-size: 18px;
  }
`

function Cards() {
  return (
    <>
      {project.map((item) => (
        <CardContainer>
          <CardBoxed>
            <CustomImage>
              <img className="img-card" alt="ScreenProject" src={item.image} />
            </CustomImage>
            <CustomCard>
              <a
                className="a-card"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{item.name}</h3>
              </a>
              <p className="p-card">
                {item.description}
                <br />
                {item.stack}
              </p>
            </CustomCard>
          </CardBoxed>
        </CardContainer>
      ))}
    </>
  );
}

export default Cards;
