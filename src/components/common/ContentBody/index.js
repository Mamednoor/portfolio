import styled from 'styled-components'

const ContentBody = styled.div`
	display: flex;
	padding: 15px;
	min-height: 500px;
	width: 100%;
	color: black;
	z-index: 2;
	line-height: 40px;
	justify-content: center;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}
`

export default ContentBody
