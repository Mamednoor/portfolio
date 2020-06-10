import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Info from "./components/pages/Info";
import Experience from "./components/pages/Experience";
import PortFolio from "./components/pages/PortFolio";
import Follow from "./components/pages/Follow";
import NavBar from "./components/shared/NavBar";
import Stack from "./components/pages/Stack";

function App() {
    return (
      <div className="App">
        <NavBar />
        <Home id="Home" />
        <Info id="Info" />
        <Stack />
        <PortFolio id="PorteFolio" />
        <Experience id="Experience" />
        <Follow id="Contact" />
      </div>
    );
  }

export default App;
