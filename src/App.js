import React, { Component } from "react";
import "./App.css";
import NavLink from "./components/shared/NavLink";
import Home from "./components/pages/Home";
import Info from "./components/pages/Info";
import Experience from "./components/pages/Experience";
import PorteFolio from "./components/pages/PorteFolio";
import Follow from "./components/pages/Follow";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink />
        <Home id="Home" />
        <Info id="Info" />
        <Experience id="Experience" />
        <PorteFolio id="PorteFolio" />
        <Follow id="Contact" />
      </div>
    );
  }
}

export default App;
