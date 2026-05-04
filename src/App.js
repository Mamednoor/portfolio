import React, { useEffect, useState } from 'react'
import Experience from './components/pages/Experience'
import Follow from './components/pages/Follow'
import Home from './components/pages/Home'
import Loader from './components/common/Loader'
import Navbar from './components/common/Navbar'
import Particle from './components/common/Particles'

import './App.css'

function App() {
	const [loader, setLoader] = useState(true)

	useEffect(() => {
		const handleLoad = () => {
			setLoader(false)
		}

		if (document.readyState === 'complete') {
			setLoader(false)
		} else {
			window.addEventListener('load', handleLoad)
			// Sécurité : au cas où l'événement load met trop de temps
			const timer = setTimeout(handleLoad, 3000)
			return () => {
				window.removeEventListener('load', handleLoad)
				clearTimeout(timer)
			}
		}
	}, [])

	return loader ? (
		<Loader />
	) : (
		<div className="App">
			<Particle />
			<Navbar />
			<Home id="Home" />
			<Experience id="Experience" />
			<Follow id="Contact" />
		</div>
	)
} 

export default App
