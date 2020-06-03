import React from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import PixieWilder from '../assets/img/PixieWilders.png'
import CookCake from '../assets/img/CookAndCake.png'
import Build from '../assets/img/UnderConstruction.jpg'
import '../stylesheet/PorteFolio.css'

function PorteFolio() {
  return (
    <section id='PorteFolio'>
      <div className="PageTags">Porte Folio</div>

        <div className='div-folio'>

        <CardDeck>
          <Card>
            <Card.Img variant="top" src={PixieWilder} alt="screen projet" style={{ width: '10rem' }}/>
            <Card.Body>
              <Card.Title>Projet 1 - Pixie Wilder</Card.Title>
              <Card.Text>
              Création d’une marketplace fictif de photographie (Stack: HTML, CSS, Git et Github)
              </Card.Text>
              <Button>Visiter le site</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={CookCake} alt="screen projet" style={{ width: '10rem' }}/>
            <Card.Body>
              <Card.Title>Projet 2 - Cook&Cake</Card.Title>
              <Card.Text>
              Création d’une Application web de cuisine (Stack: React, JavaScript, HTML et CSS, Git, GitHub, SCRUM)
              </Card.Text>
              <Button>Visiter le site</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Build} alt="screen projet" style={{ width: '10rem' }}/>
            <Card.Body>
              <Card.Title>Projet 3</Card.Title>
              <Card.Text>
              Création d’une marketplace de design - Pour le compte d'un client réel - (Stack: MySQL, React, Node.js, Git & GitHub, SCRUM)
– en cours
              </Card.Text>
              <Button>Visiter le site</Button>
            </Card.Body>
          </Card>
        </CardDeck>

        </div>
    </section>
  );
}

export default PorteFolio;
