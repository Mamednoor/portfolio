import styled from 'styled-components'
import {
  Layout,
} from 'antd'

const Bottom = styled(Layout.Footer)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;

  .a-info {
    text-align: center;
    display: flex;
    margin: 10px;
    width: min-content;
  }
  .a-info:hover{
    width: min-content;
    background-color: red;
    transition: color 0.9s, background 0.9s, border-color 0.9s, box-shadow 0.9s, -webkit-box-shadow 0.9s;
  }
`
export default Bottom