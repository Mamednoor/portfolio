import styled from 'styled-components'

const Main = styled.section`
padding-top: 150px;
min-height: 300px;
width: 100%;
color: white;
z-index: 2;

@media screen and (min-width: 200px) and (max-width: 640px){
  #Home {
    padding-top: 100px;
    min-height: 300px;
    width: 100%;
    color: white;
    z-index: 2;
  }
}
`
export default Main