import React from 'react'
import {
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaCss3,
	FaGithub,
	FaPython,
	FaPhp,
	FaAngular,
} from 'react-icons/fa'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import ContentBody from '../ContentBody'
import Title from '../Title'

function Stack() {
	return (
		<>
			<Title id="Stack">Stacks</Title>
			<ContentBody>
				<FaReact
					style={{
						fontSize: '70px',
						color: 'white',
						margin: '7px',
					}}
				/>
				<FaGithub
					style={{
						fontSize: '70px',
						color: 'white',
						margin: '7px',
					}}
				/>
				<FaNodeJs
					style={{
						fontSize: '70px',
						color: 'white',
						margin: '7px',
					}}
				/>
				<FaHtml5
					style={{
						fontSize: '70px',
						color: 'white',
						margin: '7px',
					}}
				/>
				<FaCss3
					style={{
						fontSize: '70px',
						color: 'white',
						margin: '7px',
					}}
				/>
				<FaPython
					style={{
						fontSize: '70px',
						color: 'white',
						margin: '7px',
					}}
				/>
				<FaPhp
					style={{
						fontSize: '70px',
						color: 'white',
						margin: '7px',
					}}
				/>
				<FaAngular
					style={{
						fontSize: '70px',
						color: 'white',
						margin: '7px',
					}}
				/>
				<AiOutlineConsoleSql
					style={{
						fontSize: '70px',
						color: 'white',
						margin: '7px',
					}}
				/>
			</ContentBody>
		</>
	)
}

export default Stack
