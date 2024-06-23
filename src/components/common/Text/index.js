import styled from 'styled-components'

const Text = styled.p`
	display: flex;
	justify-content: center;
	text-align: justify;
	font-family: 'Roboto', sans-serif;
	line-height: 25px;
	font-size: 20px;
	color: white;

	@media (max-width: 768px) {
		margin-bottom: 50px;
	}
`

export default Text
