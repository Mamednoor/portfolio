import React from 'react'
import './App.css'
import Info from './components/pages/Info'
import Experience from './components/pages/Experience'
import Portfolio from './components/pages/Portfolio'
import Follow from './components/pages/Follow'
import NavBar from './components/shared/NavBar'
import Home from './components/pages/Home'
import Particle from './components/common/Particles'

function App() {
	return (
		<div className="App">
			<NavBar />
			<Particle />
			<Home id="Home" />
			<Info id="Info" />
			<Portfolio id="portefolio" />
			<Experience id="Experience" />
			<Follow id="Contact" />
		</div>
	)
}

export default App
