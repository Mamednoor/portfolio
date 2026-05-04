import styled from 'styled-components'

const Link = styled.a`
	color: white;
	font-size: 20px;
	text-align: center;
	width: min-content;
	z-index: 1;

	&:hover {
		color: #cf1406;
		cursor: pointer;
		transition: color 1s, background 0.9s, border-color 0.9s, box-shadow 0.9s,
			-webkit-box-shadow 0.9s;
	}
`

export default Link
