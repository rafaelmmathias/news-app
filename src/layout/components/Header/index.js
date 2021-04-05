import React from 'react';
import Heading from '../../../components/Heading';
import { HeaderContainer } from './Header.styled';

export default function Header() {
  return (
    <HeaderContainer>
      <Heading
        fontSize={[
          'font-size-lg',
          'font-size-xl',
          'font-size-xl',
          'font-size-xxxl'
        ]}
        color="color-brand-primary-03"
      >
        Tech News
      </Heading>
      <Heading
        fontSize={[
          'font-size-xs',
          'font-size-sm',
          'font-size-sm',
          'font-size-lg'
        ]}
        color="color-brand-primary-04"
        as="h2"
      >
        Top headlines
      </Heading>
    </HeaderContainer>
  );
}
