import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./NavBar.css";

const NavBar = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav>
      <div className="nav">
        <input type="checkbox" id="nav-check"></input>
        <div className="nav-btn">
          <label className="label-nav" for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
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
            offset={-40}
            duration={500}
          >
            Présentation
          </Link>
          <Link
            className="a-nav"
            to="PortFolio"
            smooth={true}
            offset={-90}
            duration={500}
          >
            PortFolio
          </Link>
          <Link
            className="a-nav"
            to="Experience"
            smooth={true}
            offset={-180}
            duration={500}
          >
            Expériences
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

export default NavBar;
