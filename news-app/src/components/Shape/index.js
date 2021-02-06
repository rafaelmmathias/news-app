import styled from 'styled-components'
import { color,space, border, position  } from 'styled-system'

const Shape = styled.div`
  ${color}
  ${space}
  ${border}
  ${position}
  border-style: solid
`
Shape.defaultProps = {
  borderRadius: 'border-radius-none',
  padding: 'spacing-inset-lg',
  borderWidth: 'border-width-thin',
  borderColor: "color-neutral-04"
}

export default Shape