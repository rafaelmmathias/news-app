import styled from 'styled-components'
import { color,space, border, position, layout  } from 'styled-system'

const Shape = styled.div`
  ${color}
  ${layout}
  ${space}
  ${border}
  ${position}
`
Shape.defaultProps = {
  borderRadius: 'border-radius-none',
  padding: 'spacing-inset-lg',
  borderWidth: 'border-width-thin',
  borderColor: "color-neutral-04",
  borderStyle: 'border-style-01'
}

export default Shape