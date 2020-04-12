import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl"

import './App.css';


class App extends Component {
  render () {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header title="Menu" fixed>
            <Navigation>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Dashboard</a>
                <a href="/">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
            <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Dashboard</a>
                <a href="/">Contact</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
    )
}
}

export default App;
