import styled from 'styled-components'

const BriefBox = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
left: calc(50% - 180px);
min-width: 286px;
-webkit-box-reflect: below 0 -webkit-linear-gradient(transparent, transparent
      60%, rgba(255, 255, 255, 0.3));      
  h1 {
    font-family: "Russo One", sans-serif;
    font-size: 50px;
  }
  p {
    font-family: "Russo One", sans-serif;
    font-size: 20px;
  }
`

export default BriefBox