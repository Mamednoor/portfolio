import React, { Component } from 'react';
import NavLink from './components/shared/NavLink'
import Main from './components/shared/Main';
import BackImg from '../assets/background.png'
import './App.css';


class App extends Component {
  render () {
    return (
      <div>
        <NavLink />
        <Main />
        <img className='FixBackGround' src={BackImg} alt='logo'/>
      </div>
    )
}
}

export default App;






















