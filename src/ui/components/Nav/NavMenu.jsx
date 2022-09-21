import React from 'react';
import { DESKTOP_MENU, FOOTER, HEADER } from 'ui/helpers/constants';
import {
  LinkHeaderS,
  NavItemS,
  NavMenuContainerS,
  NavMenuS,
} from '../../styledComponents/NavMenuStyled';

export const NavMenu = ({
  type = DESKTOP_MENU,
  active,
  footer = false,
  closeMenu,
}) => {
  const classes = `${type} ${footer ? FOOTER : HEADER}`;
  return (
    <NavMenuContainerS className={classes} active={active}>
      <NavMenuS>
        <NavItemS>
          <LinkHeaderS onClick={closeMenu} to='about'>
            About
          </LinkHeaderS>
        </NavItemS>
        <NavItemS>
          <LinkHeaderS
            onClick={closeMenu}
            href='files/SebastianCaicedo_cv.pdf'
            as='a'
            target='_blank'
          >
            Resume
          </LinkHeaderS>
        </NavItemS>
        <NavItemS>
          <LinkHeaderS onClick={closeMenu} to='work'>
            Projects
          </LinkHeaderS>
        </NavItemS>
        {/* <NavItemS>Lessons</NavItemS> */}
        <NavItemS>
          <LinkHeaderS onClick={closeMenu} to='contact'>
            Contact
          </LinkHeaderS>
        </NavItemS>
      </NavMenuS>
    </NavMenuContainerS>
  );
};
