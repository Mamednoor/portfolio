import styled from 'styled-components'

const H2 = styled.h2`
  font-size: 1,2em;
  font-weight: normal;
  line-height: 2em;
  text-align: center;
  left: calc(50% - 180px);
  font-family: "Robotto"
  min-width: 286px;
  margin: 0 auto;
  white-space: nowrap;
  width: max-content;
  height: 40px;
  font-size: 20px;
  border-right: solid 1px gray;
  -webkit-animation: blink 0.3s infinite;
  -moz-animation: blink 0.3s infinite;
  animation: BorderOpacity 0.5s infinite;
  z-index: 1;
  -webkit-box-reflect: below 0 -webkit-linear-gradient(transparent, transparent
  15%, rgba(255, 255, 255, 0.3))
`

export default H2
