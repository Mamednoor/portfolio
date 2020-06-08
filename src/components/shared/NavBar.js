import React, {Component} from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./NavBar.css";

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
          <div className="nav-title">Mamed Gohabur - Développeur FullStack</div>
        </div>
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
            to="PorteFolio"
            smooth={true}
            offset={-90}
            duration={500}
          >
            Porte Folio
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
