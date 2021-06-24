import styled from 'styled-components'

const Centered = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    display:flex;
    flex-direction:column;
  }
`

export default Centered
