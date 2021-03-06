import styled from 'styled-components'

const H2 = styled.h2`
  font-size: 1,2em;
  font-weight: normal;
  line-height: 28px;
  text-align: center;
  left: calc(50% - 180px);
  font-family: "Russo One", sans-serif
  min-width: 286px;
  #myElement {
    -webkit-box-reflect: below 0 -webkit-linear-gradient(transparent, transparent
    15%, rgba(255, 255, 255, 0.3))
  }   
  &:last-child {
    margin-bottom: 0;
  }

`

export default H2
