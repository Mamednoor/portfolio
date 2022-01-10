import React from 'react'

import Animation from '../common/Animation/animation'
import H1 from '../common/H1'
import BriefBox from '../common/BriefBox'
import Main from '../common/Main'

function Home() {
	return (
		<Main id="Home">
			<BriefBox>
				<H1>Mamed Gohabur</H1>
				<Animation />
			</BriefBox>
		</Main>
	)
}

export default Home
