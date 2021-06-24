import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
  width: max-content;
  border: 2px solid white;

  @media (max-width: 768px) {
    display:flex;
    flex-direction:column;
    margin: 0;
  }
`

export const CardBoxed = styled.div`
  background: black;
  font-size: 15px;
  max-width: 350px;
  height: 468px;
  overflow: hidden;
  position: relative;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
`

export const CustomImage = styled.div`
  height: 224px;
  text-align: center;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
`

export const CustomCard = styled.div`
  justify-content: space-around;
  text-align: center;
  padding: 24px;
`

export const P = styled.p`
  margin-top: 13px;
  margin-bottom: 13px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  text-align: left;
`