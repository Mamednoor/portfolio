import React, { Component } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Info from "./components/pages/Info";
import Experience from "./components/pages/Experience";
import PorteFolio from "./components/pages/PorteFolio";
import Follow from "./components/pages/Follow";
import NavBar from "./components/shared/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NavLink /> */}
        <NavBar />
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
