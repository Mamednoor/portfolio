import styled from "styled-components";
import { Image } from "antd";

const Avatar = styled(
	Image
)`
	display: block;
	align-self: center;
	align-items: center;
	width: 256px;
	height: 256px;
	border-radius: 50%;
	position: relative;
	top: -306px;
	z-index: 2;
	box-shadow: 5px
		5px
		5px
		rgba(
			0,
			0,
			0,
			0.7
		);

	@media (max-width: 768px) {
		display: block;
		align-self: center;
		align-items: center;
		width: 256px;
		height: 256px;
		border-radius: 50%;
		position: relative;
		top: -14px;
	}
`;

export default Avatar;
