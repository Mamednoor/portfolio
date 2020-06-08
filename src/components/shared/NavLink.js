import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

import logoReact from "../assets/img/react.svg";
import logoNodejs from "../assets/img/nodejs.png";
import "../stylesheet/NavLink.css";

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

class NavLink extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <Logo src={logoReact} alt="logo" />
        <Logo src={logoNodejs} alt="logo" />
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="Home" smooth={true} offset={-90} duration={500}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Info" smooth={true} offset={-90} duration={500}>
                Présentation
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Experience" smooth={true} offset={-90} duration={500}>
                Expériences
              </Link>
            </li>
            <li className="nav-item">
              <Link to="PorteFolio" smooth={true} offset={-90} duration={500}>
                Porte Folio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Follow" smooth={true} offset={-90} duration={500}>
                Social
              </Link>
            </li>
          </ul>
        </div>
        
      </nav>
    );
  }
}

export default NavLink;
