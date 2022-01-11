import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

import { Nav, MobileIcon, NavMenu, NavLinks } from './components'

function Navbar() {
	const [click, setClick] = useState(false)

	const handleClick = () => setClick(!click)
	const closeMobileMenu = () => setClick(false)

	const scrollToTop = () => {
		scroll.scrollToTop()
	}

	useEffect(() => {
		scrollToTop()
	}, [])

	return (
		<>
			<Nav>
				<MobileIcon onClick={handleClick}>
					{click ? <FaTimes /> : <FaBars />}
				</MobileIcon>

				<NavMenu onClick={handleClick} click={click}>
					<NavLinks
						to="Home"
						spy={true}
						smooth={true}
						offset={-90}
						duration={500}
						onClick={closeMobileMenu}
					>
						Accueil
					</NavLinks>

					<NavLinks
						to="Info"
						spy={true}
						smooth={true}
						offset={-40}
						duration={500}
						onClick={closeMobileMenu}
					>
						Présentation
					</NavLinks>

					<NavLinks
						to="Portefolio"
						spy={true}
						smooth={true}
						offset={-90}
						duration={500}
						onClick={closeMobileMenu}
					>
						Portefolio
					</NavLinks>

					<NavLinks
						to="Experience"
						spy={true}
						smooth={true}
						offset={-180}
						duration={500}
						onClick={closeMobileMenu}
					>
						Expérience
					</NavLinks>

					<NavLinks
						to="Follow"
						spy={true}
						smooth={true}
						offset={-90}
						duration={500}
						onClick={closeMobileMenu}
					>
						Social
					</NavLinks>
				</NavMenu>
			</Nav>
		</>
	)
}

export default Navbar
