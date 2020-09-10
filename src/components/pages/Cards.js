import React from "react";
import styled from "styled-components";

import build from "../assets/img/UnderConstruction.jpg";
import cookcake from "../assets/img/CookAndCake.png";
import goatvschicken from "../assets/img/GoatvsChicken.png";
import doctalk from "../assets/img/doctalk.jpg"
import pixieWilder from "../assets/img/PixieWilders.png";
import reduxtrain from "../assets/img/redux-train.png"

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px auto;
`;

const CardBoxed = styled.div`
  background: black;
  font-size: 20px;
  max-width: 360px;
  height: 391px;
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
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
  }
  > .a-card {
    color: white;
    font-size: 20px;
    font-size: 18px;
  }
`;

function Cards() {
  return (
    <CardContainer>
      <CardBoxed>
        <CustomImage>
          <img className="img-card" alt="ScreenProject" src={pixieWilder} />
        </CustomImage>
        <CustomCard>
          <a
            className="a-card"
            href="https://mamednoor.github.io/project1PixieWilder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Pixie Wilders</h3>
          </a>
          <p className="p-card">
            Création d’une marketplace de photographie
            <br />
            Stack: HTML, CSS, Git et Github
          </p>
        </CustomCard>
      </CardBoxed>
      <CardBoxed>
        <CustomImage>
          <img className="img-card" alt="ScreenProject" src={cookcake} />
        </CustomImage>
        <CustomCard>
          <a
            className="a-card"
            href="https://cookandcake.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Cook & Cake</h3>
          </a>
          <p className="p-card">
            Création d’une Application web de cuisine avec consommation d'API
            <br />
            Stack: React, JavaScript, HTML, CSS, Git et Github, SCRUM
          </p>
        </CustomCard>
      </CardBoxed>
      <CardBoxed>
        <CustomImage>
          <img className="img-card" alt="ScreenProject" src={goatvschicken} />
        </CustomImage>
        <CustomCard>
          <a
            className="a-card"
            href="https://romantic-swirles-0e45a7.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Goat vs Chicken</h3>{" "}
          </a>
          <p className="p-card">
            Création d'un jeux vidéo lors d'un Hackathon de 24H à la
            WildCodeSchool Paris
            <br />
            Stack: JavaScript, Phaser, Git et Github
          </p>
        </CustomCard>
      </CardBoxed>
      <CardBoxed>
        <CustomImage>
          <img className="img-card" alt="ScreenProject" src={doctalk} />
        </CustomImage>
        <CustomCard>
          <a
            className="a-card"
            size="normal"
            href="https://github.com/Mamednoor/doctalkfusion"
            rel="noopener noreferrer"
          >
            <h3>Doc'Talk</h3>{" "}
          </a>
          <p className="p-card">
          Création d'une application mobile mettant en relation  médecins et patients.
            <br />
            Stack: MySQL, React, Node.js, Socket.io, Git & GitHub, SCRUM
          </p>
        </CustomCard>
      </CardBoxed>
      <CardBoxed>
        <CustomImage>
          <img className="img-card" alt="ScreenProject" src={build} />
        </CustomImage>
        <CustomCard>
          <a
            className="a-card"
            size="normal"
            href="#Home"
            rel="noopener noreferrer"
          >
            <h3>Under Construction</h3>{" "}
          </a>
          <p className="p-card">
            Création d’une marketplace de design pour le compte de Papier crayon
            <br />
            Stack: MySQL, React, Node.js, Git & GitHub, SCRUM
          </p>
        </CustomCard>
      </CardBoxed>
      <CardBoxed>
        <CustomImage>
          <img className="img-card" alt="ScreenProject" src={reduxtrain} />
        </CustomImage>
        <CustomCard>
          <a
            className="a-card"
            size="normal"
            href="https://redux-train-todoapp.netlify.app/"
            rel="noopener noreferrer"
          >
            <h3>Todo List</h3>{" "}
          </a>
          <p className="p-card">
            Création d’une Todo List avec Redux
            <br />
            Stack: React + Redux, Git & Github
          </p>
        </CustomCard>
      </CardBoxed>
    </CardContainer>
  );
}

export default Cards;
