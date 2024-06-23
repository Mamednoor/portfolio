import React, { useEffect } from 'react'
import { init } from 'ityped'

import H2 from '../H2'

const Animation = () => {
	useEffect(() => {
		const myElement = document.querySelector('#myElement')
		init(myElement, {
			showCursor: false,
			strings: [
				'Développeur Power Platform',
				'Développeur Fullstack React, Node.js',
			],
		})
	}, [])

	return (
		<H2>
			<div id="myElement"></div>
		</H2>
	)
}

export default Animation
