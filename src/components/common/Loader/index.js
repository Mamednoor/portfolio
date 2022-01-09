import React from 'react'

import Spinner from '../../../assets/load.gif'
import Centered from '../Centered'

function Loader() {
	return (
		<Centered className="containerLoader">
			<img src={Spinner} alt="logo de chargement" style={{ width: '300px' }} />
		</Centered>
	)
}

export default Loader
