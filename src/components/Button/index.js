import styled from 'styled-components'
import { color, space, border, position, typography  } from 'styled-system'

const Button = styled.button`
  ${color}
  ${typography}
  ${space}
  ${border}
  ${position}
  outline: none;
  :hover {
    background-color: ${props=> props.theme.colors["color-brand-primary-02"]}
  }
`
Button.defaultProps = {
  fontSize: "font-size-sm",
  lineHeight: "line-height-tight",
  borderRadius: "border-radius-none",
  padding: "spacing-squish-xs",
  fontFamily: "font-family-highlight",
  fontWeight: 'font-weight-medium',
  color: "color-neutral-04",
  backgroundColor: "color-brand-primary-03",
  borderWidth: "border-width-none"
}

export default Button