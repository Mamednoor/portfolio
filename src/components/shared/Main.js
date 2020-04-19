import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About'
import PorteFolio from '../pages/PorteFolio'
import Contact from '../pages/Contact'

const Main = () => (

<Switch>
    <Route exact path="/">
        <Home />
    </Route>
    <Route exact path="/about">
        <About />
    </Route>
    <Route exact path="/dashboard">
        <PorteFolio />
    </Route>
    <Route exact path="/contact">
        <Contact />
    </Route>
</Switch>
);

export default Main;
