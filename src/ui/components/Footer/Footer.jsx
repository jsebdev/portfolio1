import React from 'react';
import { FooterS } from 'ui/styledComponents/FooterStyled';
import { NavMenu } from '../Nav/NavMenu';
import { LogoName } from '../LogoName';
import { SocialButtonsFooter } from './SocialButtonsFooter';

export const Footer = () => {
  return (
    <FooterS>
      <LogoName />
      <SocialButtonsFooter />
      <NavMenu footer={true}></NavMenu>
    </FooterS>
  );
};
