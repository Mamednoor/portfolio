import React from 'react'
import styled from 'styled-components'
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

import PDF from '../../assets/Mamed-Noor-Gohabur-Développeur.pdf'
import profilePicture from '../../assets/Profile.jpeg'

const JustifiedText = styled(Text)`
	text-align: justify;
`

const IconLink = styled(Link)`
	z-index: 1;
`

function Info() {
	const iconStyle = {
		fontSize: '70px',
		color: 'white',
		margin: '7px',
	}

	const socialLinks = [
		{
			href: 'https://fr.linkedin.com/in/mamednoorgohabur',
			icon: <LinkedinOutlined style={iconStyle} className="icons" />,
		},
		{
			href: PDF,
			icon: <AuditOutlined style={iconStyle} className="icons" />,
			className: 'a-info',
		},
		{
			href: 'https://github.com/Mamednoor',
			icon: <GithubOutlined style={iconStyle} className="icons" />,
		},
		{
			href: 'mailto:mamed.gohabur@gmail.com',
			icon: <MailOutlined style={iconStyle} className="icons" />,
		},
	]

	return (
		<ContentBody id="Info">
			<Centered>
				<Avatar
					src={profilePicture}
					alt="Avatar de Mamed Noor Gohabur"
					preview={false}
				/>
			</Centered>

			<Centered>
				<JustifiedText>
					Passionné par les nouvelles technologies et la programmation, j'ai
					choisi de transformer cette vocation en carrière professionnelle. Fort
					d'un parcours diversifié en gestion opérationnelle et management, j'ai
					développé une solide capacité d'adaptation. J'allie aujourd'hui cette
					expertise métier à des compétences avancées en développement Web,
					Mobile et solutions Microsoft Dynamics 365 / Power Platform.
				</JustifiedText>
			</Centered>

			<Centered>
				<Section>
					{socialLinks.map((link, index) => (
						<IconLink
							key={index}
							href={link.href}
							target={link.href.startsWith('mailto') ? undefined : '_blank'}
							rel="noopener noreferrer"
							className={link.className}
						>
							{link.icon}
						</IconLink>
					))}
				</Section>
			</Centered>
		</ContentBody>
	)
}

export default Info
