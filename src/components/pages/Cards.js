import React, { useEffect, useState } from 'react'

import data from '../../utils/project'
import Link from '../common/Link'
import {
	CardBoxed,
	CardContainer,
	CustomImage,
	CustomCard,
	Img,
	P,
} from '../common/Card'

function Cards() {
	const [projet] = useState(data)

	useEffect(() => {}, [projet])

	return (
		<>
			{projet.map((item, i) => (
				<CardContainer key={i} className="card-container">
					<CardBoxed>
						<CustomImage>
							<Img alt="ScreenProject" src={item.image} />
						</CustomImage>
						<CustomCard>
							<Link href={item.link} target="_blank" rel="noopener noreferrer">
								<h3>{item.name}</h3>
							</Link>
							<P>{item.description}</P>
							<P>{item.stack}</P>
						</CustomCard>
					</CardBoxed>
				</CardContainer>
			))}
		</>
	)
}

export default Cards
