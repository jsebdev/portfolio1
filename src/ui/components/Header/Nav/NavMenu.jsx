import React from 'react';
import { desktopMenu } from '../../../helpers/strings';
import {
  LinkHeaderS,
  NavItemS,
  NavMenuContainerS,
  NavMenuS,
} from '../../../styledComponents/NavMenuStyled';

export const NavMenu = ({
  type = desktopMenu,
  active,
  closeMenu = () => {},
}) => {
  return (
    <NavMenuContainerS type={type} active={active}>
      <NavMenuS type={type}>
        <NavItemS type={type}>
          <LinkHeaderS onClick={closeMenu} to='about'>
            About
          </LinkHeaderS>
        </NavItemS>
        <NavItemS type={type}>
          <LinkHeaderS onClick={closeMenu} to='files/cv.pdf' target='_blank'>
            Resume
          </LinkHeaderS>
        </NavItemS>
        <NavItemS type={type}>
          <LinkHeaderS onClick={closeMenu} to='work'>
            Projects
          </LinkHeaderS>
        </NavItemS>
        {/* <NavItemS>Lessons</NavItemS> */}
        <NavItemS type={type}>
          <LinkHeaderS onClick={closeMenu} to='contact'>
            Contact
          </LinkHeaderS>
        </NavItemS>
      </NavMenuS>
    </NavMenuContainerS>
  );
};
