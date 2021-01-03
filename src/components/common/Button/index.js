import styled, {
  css,
} from 'styled-components'
import {
  Button,
} from 'antd'

const submit = css`
  background-color: @green-base;
  color: @neutral-0;
  font-size: @font-size-base;
  border-radius: @border-radius-base;
  border-color: @green-base;
  min-width: 220px;

  &:hover, &:focus {
    color: @green-base;
    background: @neutral-0;
    border-color: @green-base;
  }
`

const cancel = css`
  background-color: @neutral-1;
  color: @neutral-4;
  font-size: @font-size-base;
  border: none;
  border-radius: @border-radius-base;
`

const readOnly = css`
  opacity: 0.2;
  pointer-events: none;
`

const styles = {
  submit,
  cancel,
}

const wide = css`
  min-width: 220px;
`

const noBorder = css`
  border: none;
`

const fullWidthCSS = css`
  width: 100%;
`

const CustomButton = styled(Button)`
  ${props => (props.$wide ? wide : '')};
  ${props => styles[props.type] ?? ''};
  ${props => (props.readOnly ? readOnly : '')};
  ${props => (props.$noBorder ? noBorder : '')};
  ${props => props.$full ? fullWidthCSS : ''};
`

export default CustomButton
