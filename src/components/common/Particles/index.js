import React from 'react'
import Particles from 'react-tsparticles'

function Particle() {
	const particlesInit = (main) => {}

	const particlesLoaded = (container) => {}

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fps_limit: 60,
				interactivity: {
					detect_on: 'canvas',
					events: {
						onClick: {
							enable: true,
							mode: 'push',
						},
						onHover: {
							enable: true,
						},
						resize: true,
					},
				},
				particles: {
					color: { value: '#ffffff' },
					line_linked: {
						color: '#ffffff',
						distance: 150,
						enable: true,
						opacity: 0.4,
						width: 0.5,
					},
					move: {
						attract: { enable: false, rotateX: 600, rotateY: 1200 },
						bounce: false,
						direction: 'none',
						enable: true,
						out_mode: 'out',
						random: false,
						speed: 1,
						straight: false,
					},
					number: { density: { enable: true, value_area: 800 }, value: 80 },
					opacity: {
						anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
						random: false,
						value: 0.5,
					},
					shape: {
						character: {
							fill: false,
							font: 'Verdana',
							style: '',
							value: '*',
							weight: '400',
						},
						image: {
							height: 100,
							replace_color: true,
							src: 'images/github.svg',
							width: 100,
						},
						polygon: { nb_sides: 5 },
						stroke: { color: '#000000', width: 0 },
						type: 'circle',
					},
					size: {
						anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
						random: true,
						value: 5,
					},
				},
				polygon: {
					draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
					move: { radius: 10 },
					scale: 1,
					type: 'none',
					url: '',
				},
				retina_detect: true,
			}}
		/>
	)
}

export default Particle