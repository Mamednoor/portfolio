import React, { useEffect, useState } from 'react'
import Info from './components/pages/Info'
import Experience from './components/pages/Experience'
import Portfolio from './components/pages/Portfolio'
import Follow from './components/pages/Follow'
import Home from './components/pages/Home'
import Particle from './components/common/Particles'

import './App.css'
import Loader from './components/common/Loader'
import Navbar from './components/common/Navbar'

function App() {
	const [loader, setLoader] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoader(false)
		}, 1800)
	}, [])

	return loader ? (
		<Loader />
	) : (
		<div className="App">
			<Particle />
			<Navbar />
			<Home id="Home" />
			<Info id="Info" />
			<Portfolio id="portefolio" />
			<Experience id="Experience" />
			<Follow id="Contact" />
		</div>
	)
}

export default App
