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
	position: relative;
	display: inline-block;
	padding: 13px 30px 13px 30px;
	text-decoration: none;
	color: inherit;
	cursor: pointer;
	transition: all 0.2s;
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 100%;
		display: inline-block;
		height: 1rem;
		background: #efefef;
		transition: all 0.25s cubic-bezier(1, 0.68, 0.16, 0.9);
	}
	&:hover {
		color: #cf1406;
	}
	&:hover::after {
		right: 0;
		height: 2px;
		background: #cf1406;
	}

	&:active {
		color: #cf1406;
		height: min-content;
	}

	@media screen and (max-width: 768px) {
		display: block;
		width: 100%;
	}
`
