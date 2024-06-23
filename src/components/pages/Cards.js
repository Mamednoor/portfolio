import React, { useEffect, useState } from 'react'

import { FieldTimeOutlined } from '@ant-design/icons'

import Centered from '../common/Centered'

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

import { FieldTimeOutlined } from '@ant-design/icons'

function Cards() {
	const [projet] = useState(data)

	useEffect(() => {}, [projet])

	return (
		<>
			{projet.map((item, i) => (
				<CardContainer key={i} className="card-container">
					<CardBoxed>
						<CustomImage>
							{/* <Img
								alt="Voici une photo du projet présenté avec sa technologie associée"
								src={item.image}
							/> */}
							{item.image != null ? (
								<Img
									alt="Voici une photo du projet présenté avec sa technologie associée"
									src={item.image}
								/>
							) : (
								<Centered>
									<FieldTimeOutlined
										style={{
											fontSize: '70px',
											color: 'white',
											marginTop:'100px'
										}}
									/>
								</Centered>
							)}
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
