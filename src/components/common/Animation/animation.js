import React, { useEffect } from 'react'
import { init } from 'ityped'

import H2 from '../H2'

const Animation = () => {
<<<<<<< HEAD
  
	/*
  useEffect(() => {
     const myElement = document.querySelector('#myElement')
    init(myElement, { showCursor: false, strings: ['Développeur Fullstack', 'React, Node.js'] })
  }, []) */
	
=======
>>>>>>> origin/master
	useEffect(() => {
		const myElement = document.querySelector('#myElement')
		init(myElement, {
			showCursor: false,
			strings: [
<<<<<<< HEAD
				'Développeur Fullstack React, Node.js',
				'Développeur Power Platform',
=======
				'Développeur Power Platform',
				'Développeur Fullstack React, Node.js',
>>>>>>> origin/master
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
