import styled from 'styled-components'

const Section = styled.section`
display: flex;
flex-direction: row;

  .a-info {
    text-align: center;
    display: flex;
    margin: 10px;
    width: min-content;
  }
  .a-info:hover{
    width: fit-content;
    background-color: red;
    border-radius: 2px
  }
`

export default Section