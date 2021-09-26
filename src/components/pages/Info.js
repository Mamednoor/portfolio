import React from "react";

import {
	MailOutlined,
	LinkedinOutlined,
	AuditOutlined,
	GithubOutlined,
} from "@ant-design/icons";

import Centered from "../common/Centered";
import ContentBody from "../common/ContentBody";
import Avatar from "../common/Avatar";
import Section from "../common/Section";
import Text from "../common/Text";
import Link from "../common/Link";

import "../stylesheet/Info.css";

import PDF from "../../assets/Mamed-Gohabur-Developpeur-React-Nodejs.pdf";
import profilePicture from "../../assets/Profile.jpeg";

function Info() {
	return (
		<ContentBody id='Info'>
			<Centered>
				<svg
					style={{
						position:
							"relative",
						top: "154px",
					}}
					className='blob-info'
					viewBox='0 0 200 200'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill='#FF0000'
						d='M23.6,-30.6C34.4,-29.7,49.7,-29.7,61.3,-22.6C72.9,-15.5,80.9,-1.4,74.5,7.5C68.2,16.3,47.7,19.9,35.4,26.3C23.1,32.7,19,41.8,11.5,48.2C4,54.5,-7,58,-15.4,54.6C-23.8,51.2,-29.6,40.9,-36.7,32.1C-43.7,23.3,-52,16,-60.8,4.2C-69.6,-7.6,-78.9,-24,-71.6,-29.6C-64.2,-35.2,-40.2,-30.2,-25.5,-29.3C-10.8,-28.4,-5.4,-31.7,0.5,-32.4C6.4,-33.2,12.7,-31.5,23.6,-30.6Z'
						transform='translate(100 100)'
					/>
				</svg>
				<Avatar
					src={
						profilePicture
					}
					alt='Profile'
				/>
			</Centered>

			<Centered>
				<Text>
					Passionné
					par
					les
					nouvelles
					technologies,
					l'informatique
					et
					la
					programmation
					ce
					fût
					avec
					logique
					et
					courage
					de
					sauté
					le
					pas
					afin
					de
					fusionner
					passion
					et
					travail.
					Fort
					de
					mes
					expériences
					dans
					plusieurs
					secteurs
					d'activité,
					après
					avoir
					adapté
					méthodologie
					de
					travail,
					style
					de
					management
					dans
					des
					métiers
					fonctionnels.
					J'ai
					décidé
					de
					compléter
					mon
					expertise
					en
					développement
					web
					et
					mobile
					en
					me
					spécialisant
					dans
					les
					outils
					Microsoft
					D365.
				</Text>
			</Centered>

			<Centered>
				<Section>
					<Link
						href='https://www.linkedin.com/in/mamednoorgohabur/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<LinkedinOutlined
							style={{
								fontSize:
									"70px",
								color:
									"white",
								margin:
									"7px",
							}}
							className='icons'
						/>
					</Link>

					<Link
						href={
							PDF
						}
						className='a-info'
					>
						<AuditOutlined
							style={{
								fontSize:
									"70px",
								color:
									"white",
								margin:
									"7px",
							}}
							className='icons'
						/>
					</Link>

					<Link
						href='https://github.com/Mamednoor'
						target='_blank'
						rel='noopener noreferrer'
					>
						<GithubOutlined
							style={{
								fontSize:
									"70px",
								color:
									"white",
								margin:
									"7px",
							}}
							className='icons'
						/>
					</Link>

					<Link
						href='mailto:mamed.gohabur@gmail.com'
						rel='noopener noreferrer'
					>
						<MailOutlined
							style={{
								fontSize:
									"70px",
								color:
									"white",
								margin:
									"7px",
							}}
							className='icons'
						/>
					</Link>
				</Section>
			</Centered>
		</ContentBody>
	);
}

export default Info;
