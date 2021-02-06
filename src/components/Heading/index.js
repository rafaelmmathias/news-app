import styled from 'styled-components'
import { color, typography, space  } from 'styled-system'

const Heading = styled.h1`
  ${color}
  ${space}
  ${typography}
`
Heading.defaultProps = {
  fontSize: "font-size-lg",
  fontFamily: "font-family-highlight",
  fontWeight: 'font-weight-bold',
  lineHeight: "line-height-distant",
  color: "color-neutral-01"
}

export default Heading