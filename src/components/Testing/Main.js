import React from "react";
import { Switch, Route } from "react-router-dom";
import Content from '../pages/Content';
import PorteFolio from '../pages/PorteFolio'


const Main = () => (

<Switch>
    <Route exact path="/">
        <Content />
    </Route>
    <Route path="/dashboard">
        <PorteFolio />
    </Route>
</Switch>
);

export default Main;
