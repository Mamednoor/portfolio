import React, {Component} from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import "../stylesheet/NavLink.css";


class NavLink extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Presentation"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Presentation
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="PorteFolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Porte Folio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}


// function NavLink() {

//     return (
//     <header className="header-navlink">
//         <div className="navBar">
//             <ul className={"links"}>
//                 <li className="link-li">
//                     <Link activeClass="active" className="header-a" to="/">Home</Link>
//                 </li>
//                 <li className="link-li">
//                     <Link activeClass="active" className="header-a" to="/dashboard">Porte Folio</Link>
//                 </li>
//                 <li className="link-li">
//                     <Link activeClass="active" className="header-a" to="/contact">Contact</Link>
//                 </li>
//             </ul>
//         </div>
//     </header>
//     );
// }

export default NavLink;
