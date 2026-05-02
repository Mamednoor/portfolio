import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'

import H2 from '../H2'

const Animation = () => {
	const textRef = useRef()

	useEffect(() => {
		init(textRef.current, {
			showCursor: false,
			strings: [
				'Développeur Power Platform',
				'Développeur Fullstack React, Node.js',
			],
		})
	}, [])

	return (
		<H2>
			<div ref={textRef}></div>
		</H2>
	)
}

export default Animation
