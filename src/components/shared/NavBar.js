import React, {Component} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled, { keyframes } from "styled-components";

import logoReact from "../assets/img/react.svg";
import logoNodejs from "../assets/img/nodejs.png";
import "./NavBar.css";

const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;
const Logo = styled.img`

  animation: ${spin} infinite 5s linear;
  height: 3vh;
  grid-area: 1/1/2/2;
`;

class NavBar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
  return (
    <nav>
      <div className="nav">
        <input type="checkbox" id="nav-check"></input>
        <div className="nav-header">
          <div className="nav-title"></div>
        </div>
        <div className="nav-btn">
          <label className="label-nav" for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
        <Logo src={logoReact} alt="logo" />
        <Logo src={logoNodejs} alt="logo" />
          <Link
            className="a-nav"
            to="Home"
            smooth={true}
            offset={-90}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="a-nav"
            to="Info"
            smooth={true}
            offset={-90}
            duration={500}
          >
            Présentation
          </Link>
          <Link
            className="a-nav"
            to="Experience"
            smooth={true}
            offset={-90}
            duration={500}
          >
            Expériences
          </Link>
          <Link
            className="a-nav"
            to="PorteFolio"
            smooth={true}
            offset={-90}
            duration={500}
          >
            Porte Folio
          </Link>
          <Link
            className="a-nav"
            to="Follow"
            smooth={true}
            offset={-90}
            duration={500}
          >
            Social
          </Link>
        </div>
      </div>
    </nav>
  );
}
}

export default NavBar;
