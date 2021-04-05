import styled from 'styled-components';
import { space, flexbox, layout } from 'styled-system';
import { color, border, position, typography } from 'styled-system';
import Button from '../../../../components/Button';

export const CategoryListContainer = styled.div`
  ${flexbox}
  ${space}
  ${layout}
`;

CategoryListContainer.defaultProps = {
  width: 'size-general-full',
  display: 'flex'
};

export const CategoryOption = styled(Button)`
  ${color}
  ${typography}
    ${space}
    ${border}
    ${position}
    ${layout}
    cursor: pointer;
  background-color: ${props =>
    props.active
      ? props.theme.colors['color-brand-primary-01']
      : props.theme.colors['color-brand-primary-03']};
`;

CategoryOption.defaultProps = {
  width: 'size-general-full'
};
