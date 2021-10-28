import React from 'react';
import {
  Logo,
  HeaderContainer,
  Toggle,
  ToggleSpan,
  ToggleIcon,
} from './Header.Styled';

import { Moon, Sun } from '../../assets/Icons';

const Header = ({ toggle, themeToggler }) => {
  return (
    <HeaderContainer>
      <Logo>devfinder</Logo>
      <Toggle onClick={themeToggler}>
        {toggle}
        <ToggleSpan>{toggle === 'dark' ? <Moon /> : <Sun />}</ToggleSpan>
      </Toggle>
    </HeaderContainer>
  );
};

export default Header;
