import styled from 'styled-components'

const H1 = styled.h1`
  font-size: @heading-1-size;
  font-weight: 500;
  line-height: 32px;
  color: @primary-color;
  padding-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`

export default H1
