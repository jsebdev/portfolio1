import React from 'react';
import { LogoName } from './LogoName/LogoName';
import { Nav } from './Nav/Nav';
import { HeaderS } from '../../styledComponents/HeaderStyled';
import { ThemeIcon } from './ThemeIcon/ThemeIcon';

export const Header = () => {
  return (
    <HeaderS>
      <Nav />
      <LogoName />
      <ThemeIcon />
    </HeaderS>
  );
};
