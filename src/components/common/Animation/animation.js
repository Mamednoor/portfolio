import React, { useEffect } from 'react'
import { init } from 'ityped'

import H2 from '../H2'

const Animation = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
  
	/*
  useEffect(() => {
     const myElement = document.querySelector('#myElement')
    init(myElement, { showCursor: false, strings: ['Développeur Fullstack', 'React, Node.js'] })
  }, []) */
	
<<<<<<< HEAD
=======
=======
>>>>>>> origin/master
>>>>>>> master
	useEffect(() => {
		const myElement = document.querySelector('#myElement')
		init(myElement, {
			showCursor: false,
			strings: [
<<<<<<< HEAD
				'Développeur Fullstack React, Node.js',
				'Développeur Power Platform',
<<<<<<< HEAD
=======
=======
				'Développeur Power Platform',
				'Développeur Fullstack React, Node.js',
>>>>>>> origin/master
>>>>>>> master
			],
		})
	}, [])

	return (
		<>
		<H2>
			<div id="myElement"></div>
		</H2>

		</>
	)
}

export default Animation
