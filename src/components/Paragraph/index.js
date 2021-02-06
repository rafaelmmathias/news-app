import styled from 'styled-components'
import { color, typography, space  } from 'styled-system'

const Paragraph = styled.p`
  ${color}
  ${space}
  ${typography}
`
Paragraph.defaultProps = {
  fontSize: "font-size-xs",
  fontFamily: "font-family-highlight",
  fontWeight: 'font-weight-regular',
  lineHeight: "line-height-distant",
  color: "color-neutral-02"
}

export default Paragraph