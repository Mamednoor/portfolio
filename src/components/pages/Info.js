import React from 'react'

import {
	MailOutlined,
	LinkedinOutlined,
	AuditOutlined,
	GithubOutlined,
} from '@ant-design/icons'

import Centered from '../common/Centered'
import ContentBody from '../common/ContentBody'
import Avatar from '../common/Avatar'
import Section from '../common/Section'
import Text from '../common/Text'
import Link from '../common/Link'

import '../stylesheet/Info.css'

import PDF from '../../assets/Mamed-Gohabur-Developpeur-React-Nodejs.pdf'
import profilePicture from '../../assets/Profile.jpeg'

function Info() {
	return (
		<ContentBody id="Info">
			<Centered>
				<Avatar src={profilePicture} alt="Avatar de Mamed Noor Gohabur" />
			</Centered>

			<Centered>
				<Text>
					Passionné par les nouvelles technologies, l'informatique et la
					programmation ce fût avec logique et courage de sauté le pas afin de
					fusionner passion et travail. Fort de mes expériences dans plusieurs
					secteurs d'activité, après avoir adapté méthodologie de travail, style
					de management dans des métiers fonctionnels et opérationnels. J'ai
					décidé de compléter mon expertise dans le développement web et mobile
					tout en me spécialisant dans les outils Microsoft D365 ainsi que le
					développement d'application PowerPlateform.
				</Text>
			</Centered>

			<Centered>
				<Section>
					<Link
						href="https://fr.linkedin.com/in/mamednoorgohabur"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedinOutlined
							style={{
								fontSize: '70px',
								color: 'white',
								margin: '7px',
							}}
							className="icons"
						/>
					</Link>

					<Link href={PDF} className="a-info">
						<AuditOutlined
							style={{
								fontSize: '70px',
								color: 'white',
								margin: '7px',
							}}
							className="icons"
						/>
					</Link>

					<Link
						href="https://github.com/Mamednoor"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GithubOutlined
							style={{
								fontSize: '70px',
								color: 'white',
								margin: '7px',
							}}
							className="icons"
						/>
					</Link>

					<Link href="mailto:mamed.gohabur@gmail.com" rel="noopener noreferrer">
						<MailOutlined
							style={{
								fontSize: '70px',
								color: 'white',
								margin: '7px',
							}}
							className="icons"
						/>
					</Link>
				</Section>
			</Centered>
		</ContentBody>
	)
}

export default Info
