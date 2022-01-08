import React from 'react'

import Spinner from '../../../assets/load.gif'
import Centered from '../Centered'

function Loader() {
	return (
		<Centered
			className="contaierLoader"
			style={{
				width: '100%',
				margin: '80px auto',
				minHeight: '88vh',
			}}
		>
			<img src={Spinner} alt="logo de chargement" style={{ width: '300px' }} />
		</Centered>
	)
}

export default Loader
