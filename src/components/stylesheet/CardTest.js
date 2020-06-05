import React from "react";
import { makeStyles } from "@material-ui/core/styles";


import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import PixieWilder from '../assets/img/PixieWilders.png'
import CookCake from '../assets/img/CookAndCake.png'
import Build from '../assets/img/UnderConstruction.jpg'

const useStyles = makeStyles({
  root: {
    width: 500,
    margin:20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    fontSize: 14
  }
});

export default function CardTest() {
  const classes = useStyles();

  return (
  <>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Projet 1
        </Typography>
        <CardMedia
          className={classes.media}
          image={PixieWilder}
          title="screen project"
        />
        <Typography variant="h5" component="h2">
        Pixie Wilder
        </Typography>
        <Typography variant="body2" component="p">
        Création d’une marketplace fictif de photographie 
        <br />
        (Stack: HTML, CSS, Git et Github)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href="https://mamednoor.github.io/project1PixieWilder/" target="_blank" >Visite</a></Button>
      </CardActions>
    </Card>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Projet 2
        </Typography>
        <CardMedia
          className={classes.media}
          image={CookCake}
          title="screen project"
        />
        <Typography variant="h5" component="h2">
        Cook & Cake
        </Typography>
        <Typography variant="body2" component="p">
        Création d’une Application web de cuisine avec consommation d'API
        <br />
        (Stack: React, JavaScript, HTML, CSS, Git et Github, SCRUM)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href="https://cookandcake.netlify.app/" target="_blank" >Visite</a></Button>
      </CardActions>
    </Card>    
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Projet 3
        </Typography>
        <CardMedia
          className={classes.media}
          image={Build}
          title="screen project"
        />
        <Typography variant="h5" component="h2">
        Under Construction
        </Typography>
        <Typography variant="body2" component="p">
        Création d’une marketplace de design 
        <br />
        (Stack: MySQL, React, Node.js, Git & GitHub, SCRUM)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href="" target="_blank">Visite</a></Button>
      </CardActions>
    </Card>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Hackathon de 24h @ WildCodeSchool
        </Typography>
        <CardMedia
          className={classes.media}
          image={Build}
          title="screen project"
        />
        <Typography variant="h5" component="h2">
        Goat vs Chicken
        </Typography>
        <Typography variant="body2" component="p">
        Création d'un jeux video avec Phaser
        <br />
        (Stack: JavaScript, HTML, CSS)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href="https://romantic-swirles-0e45a7.netlify.app/" target="_blank">Visite</a></Button>
      </CardActions>
    </Card>
  </>
  );
}
