import React from 'react';
import styled from 'styled-components';


import PixieWilder from '../assets/img/PixieWilders.png'
import CookCake from '../assets/img/CookAndCake.png'
import Build from '../assets/img/UnderConstruction.jpg'


const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto,
`

const CardBoxed = styled.div`
  background: #ffffff;
  font-size: 12px;
  max-width: 360px;
  height: 391px;
  overflow: hidden;
  position: relative;
  -webkit-transition: all .3s;
  transition: all .3s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
`

const CustomImage = styled.div`
  height: 224px;
  text-align: center;
  background-color: papayawhip;
  > img {
      width: 100%;
      height: 100%;
    }

`
const CustomCard = styled.div`
  justify-content: space-around;
  text-align: center;
  padding: 24px;
  > p {
      margin: 10px;
      color: #566271;
      font-size: 14px;

    }
  > a {
    color: #333f48;
      font-size: 20px;
      font-size: 18px;
  }
`

function Cards() {

    return (
      <CardContainer>
        <CardBoxed>
          <CustomImage>
            <img alt="example" src={PixieWilder}/>
          </CustomImage>
          <CustomCard>
          <a href="https://mamednoor.github.io/project1PixieWilder/" target="_blank"><h3>Pixie Wilders</h3></a>
            <p>
            Création d’une marketplace fictif de photographie 
            <br />
            (Stack: HTML, CSS, Git et Github)        
            </p>
          </CustomCard>       
        </CardBoxed>
        <CardBoxed>
          <CustomImage>
            <img alt="example" src={CookCake} />
          </CustomImage>
          <CustomCard>
          <a href="https://cookandcake.netlify.app/" target="_blank"><h3>Cook & Cake</h3></a>
            <p>Création d’une Application web de cuisine avec consommation d'API
            <br />
            (Stack: React, JavaScript, HTML, CSS, Git et Github, SCRUM)</p>        
          </CustomCard>       
        </CardBoxed>
        <CardBoxed>
          <CustomImage>
            <img alt="example" src="http://images.brisbanetimes.com.au/2009/12/22/994443/ABC-Brisbane-Building-site-plan-600x400.jpg" />
          </CustomImage>
          <CustomCard>
          <a href="https://romantic-swirles-0e45a7.netlify.app/" target="_blank" ><h3>Goat vs Chicken</h3> </a>
            <p>Création d'un jeux vidéo lors d'un Hackathon de 24H à la WildCodeSchool Paris
            <br/>
            (Stack: JavaScript, Phaser, Git et Github)</p>
          </CustomCard>       
        </CardBoxed>
        <CardBoxed>
          <CustomImage>
            <img alt="example" src={Build} />
          </CustomImage>
          <CustomCard>
          <a size="normal" primary href="" target="_blank"><h3>Under Construction</h3> </a>
            <p>Création d’une marketplace de design 
            <br />
            (Stack: MySQL, React, Node.js, Git & GitHub, SCRUM)</p>
          </CustomCard>       
        </CardBoxed>
      </CardContainer>
    );
  }

export default Cards