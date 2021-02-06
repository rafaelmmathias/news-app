import styled from 'styled-components'
import { color, typography, space  } from 'styled-system'

const Subtitle = styled.h1`
  ${color}
  ${typography}
  ${space}
`
Subtitle.defaultProps = {
  fontSize: "font-size-md",
  lineHeight: "line-height-medium",
  fontFamily: "font-family-highlight",
  fontWeight: 'font-weight-medium',
  color: "color-neutral-02"
}

export default Subtitle