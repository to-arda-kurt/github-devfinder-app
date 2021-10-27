import React from 'react';
import { Logo, HeaderContainer, Toggle } from './Header.Styled';

const Header = ({ toggle, themeToggler }) => {
  return (
    <HeaderContainer>
      <Logo>devfinder</Logo>
      <Toggle onClick={themeToggler}>{toggle}</Toggle>
    </HeaderContainer>
  );
};

export default Header;
