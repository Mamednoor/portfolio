import styled from 'styled-components'

const Section = styled.section`
	display: flex;
	flex-direction: row;

	.icons {
		text-align: center;
		display: flex;
		margin: 10px;
		width: min-content;
		transition: all 0.2s ease-in-out;
	}

	.icons:hover {
		transform: scale(1.1);
	}

	svg:hover {
		color: red;
		transition: color 0.9s, background 0.9s, border-color 0.9s, box-shadow 0.9s,
			-webkit-box-shadow 0.9s;
	}
`

export default Section
