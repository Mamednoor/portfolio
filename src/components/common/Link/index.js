import styled from 'styled-components'

const Link = styled.a`
	color: white;
	font-size: 20px;
	text-align: center;
	width: min-content;
	z-index: 1;

<<<<<<< HEAD
  :hover {
    color: red;
    cursor:pointer;
    transition: color 0.9s, background 0.9s, border-color 0.9s, box-shadow 0.9s, -webkit-box-shadow 0.9s;
  }
=======
	&:hover {
		color: #cf1406;
		cursor: pointer;
		transition: color 1s, background 0.9s, border-color 0.9s, box-shadow 0.9s,
			-webkit-box-shadow 0.9s;
	}
>>>>>>> origin/master
`

// const Link = styled.a`
// 	position: relative;
// 	display: inline-block;
// 	text-decoration: none;
// 	color: inherit;
// 	font-weight: 400;
// 	margin: 10px auto;
// 	width: min-content;
// 	z-index: 1;

// 	&:focus {
// 		outline: none;
// 	}

// 	&::after {
// 		content: '';
// 		display: block;
// 		position: absolute;
// 		top: 0;
// 		left: 0;
// 		right: 100%;
// 		color: #cf1406;
// 		height: 100%;
// 		z-index: -1;
// 		transition: all 0.2s cubic-bezier(1, 0.68, 0.16, 0.9);
// 	}

// 	&:hover::after,
// 	&:focus::after {
// 		right: 0;
// 		color: #cf1406;
// 	}
// `

export default Link
