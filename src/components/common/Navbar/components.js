import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Nav = styled.nav`
	width: 100%;
	display: flex;
	background: rgb(0, 0, 0);
	height: 55px;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: fixed;
	top: 0;
	z-index: 1000;
	@media screen and (max-width: 768px) {
		background: rgb(0, 0, 0, 0.5);
	}
`

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: -10px;
		right: -10px;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`

export const NavMenu = styled.div`
	display: flex;

	align-items: center;
	list-style: none;
	text-align: center;
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 95vh;
		position: absolute;
		top: 55px;
		left: ${({ click }) => (click ? 0 : '-100%')};
		transition: all 0.5s ease;
		background-color: rgba(0, 0, 0, 0.8);
	}
`

export const NavLinks = styled(Link)`
	display: inline-flex;
	padding: 13px 30px 13px 30px;
	color: #efefef;
	cursor: pointer;
	text-decoration: underline 0.15em rgba(0, 0, 0);
	text-underline-offset: 0.2em;
	transition: text-decoration-color 300ms, text-underline-offset 300ms;
	&:hover {
		color: #cf1406;
		height: min-content;
		text-decoration-color: #cf1406;
		text-underline-offset: 0.8em;
		font-size: 20px;
	}

	&:active {
		color: red;
		height: min-content;
	}

	@media screen and (max-width: 768px) {
		display: block;
		width: 100%;
	}
`
