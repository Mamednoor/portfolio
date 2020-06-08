import React from "react";

import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Info from "./Info";
import PorteFolio from "./PorteFolio";

import "../stylesheet/Home.css";

function Content() {
  return (
    <>
      <Home id="Home" />
      <Info id="Presentation" />
      <Experience id="Experience" />
      <PorteFolio id="PorteFolio" />
      <Contact id="Contact" />
    </>
  );
}

export default Content;
