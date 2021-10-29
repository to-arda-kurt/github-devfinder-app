import React from 'react';
import { Logo, HeaderContainer, Toggle, ToggleSpan } from './Header.Styled';

import { Moon, Sun } from '../../assets/Icons';

const Header = ({ toggle, themeToggler }) => {
  return (
    <HeaderContainer>
      <Logo>devfinder</Logo>
      <Toggle onClick={themeToggler}>
        {toggle === 'light' ? 'DARK' : 'LIGHT'}
        <ToggleSpan>{toggle === 'light' ? <Moon /> : <Sun />}</ToggleSpan>
      </Toggle>
    </HeaderContainer>
  );
};

export default Header;
