import React, { Component } from "react";
import "./App.css";
import NavLink from "./components/shared/NavLink";
import Home from "./components/pages/Home";
import Info from "./components/pages/Info";
import Experience from "./components/pages/Experience";
import PorteFolio from "./components/pages/PorteFolio";
import Contact from "./components/pages/Contact";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink />
        <Home
          dark={true}
          id="Home"
        />
        <Info
          dark={false}
          id="Info"
        />
        <Experience
          dark={true}
          id="Experience"
        />
        <PorteFolio
          dark={false}
          id="PorteFolio"
        />
        <Contact
          dark={true}
          id="Contact"
        />
      </div>
    );
  }
}

export default App;