import styled from 'styled-components'
import { Image } from 'antd'

const Avatar = styled(Image)`
	display: block;
	align-self: center;
	align-items: center;
	width: 256px;
	height: 256px;
	border-radius: 50%;
	position: relative;
	top: -5px;
	z-index: 2;


	@media (max-width: 768px) {
		display: block;
		align-self: center;
		align-items: center;
		width: 256px;
		height: 256px;
		border-radius: 50%;
		position: relative;
		top: -36px;
	}

	@media screen and (max-width: 1080px) {
		display: flex;
		flex-direction: column
		align-self: center;
		align-items: center;
		width: 256px;
		height: 256px;
		border-radius: 50%;
		position: relative;
		top: -36px;
		z-index: 2;
	}
`

export default Avatar
