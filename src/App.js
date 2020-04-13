import React, { Component } from 'react';
import Main from './components/pages/Main'
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl"
import {Link} from 'react-router-dom'

import './App.css';


class App extends Component {
  render () {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header title="Menu" fixed>
                <Navigation>
                    <Link to="/"><a className="link" href="/">Home</a></Link>
                    <Link to="/about"><a className="link" href="/about">About</a></Link>
                    <Link to="/dashboard"><a className="link" href="/dashboard">Porte Folio</a></Link>
                    <Link to="/contact"><a className="link" href="/contact">Contact</a></Link>
                </Navigation>
            </Header>
            <Drawer title="Menu">
                <Navigation>
                  <Link to="/"><a className="linkaside" href="/">Home</a></Link>
                  <Link to="/about"><a className="linkaside" href="/about">About</a></Link>
                  <Link to="/dashboard"><a className="linkaside" href="/dashboard">Porte Folio</a></Link>
                  <Link to="/contact"><a className="linkaside" href="/contact">Contact</a></Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
      </div>
    )
}
}

export default App;
