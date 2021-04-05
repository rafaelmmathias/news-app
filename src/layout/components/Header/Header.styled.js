import styled from 'styled-components';
import { color, typography, space, boxShadow, border } from 'styled-system';

export const HeaderContainer = styled.div`
  ${space}
  ${color}
  ${typography}
  ${boxShadow}
  ${border}
  border-style: solid
`;

HeaderContainer.defaultProps = {
  padding: ['spacing-inset-nano', 'spacing-inset-sm'],
  bg: 'color-neutral-01'
};
