import React from 'react';
import { LogoName } from '../LogoName';
import { Nav } from '../Nav/Nav';
import { HeaderS } from '../../styledComponents/HeaderStyled';
import { ThemeIcon } from './ThemeIcon';

export const Header = () => {
  return (
    <HeaderS>
      <Nav />
      <LogoName />
      <ThemeIcon />
    </HeaderS>
  );
};
