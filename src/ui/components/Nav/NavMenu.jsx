import React from 'react';
import { DESKTOP_MENU, FOOTER, HEADER } from 'ui/helpers/constants';
import {
  NavItemS,
  NavMenuContainerS,
  NavMenuS,
} from '../../styledComponents/NavMenuStyled';
import { LinkS } from 'ui/styledComponents/LinkStyled';

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
          <LinkS onClick={closeMenu} to='about'>
            About
          </LinkS>
        </NavItemS>
        <NavItemS>
          <LinkS
            onClick={closeMenu}
            href='files/SebastianCaicedo_cv.pdf'
            as='a'
            target='_blank'
          >
            Resume
          </LinkS>
        </NavItemS>
        <NavItemS>
          <LinkS onClick={closeMenu} to='work'>
            Projects
          </LinkS>
        </NavItemS>
        {/* <NavItemS>Lessons</NavItemS> */}
        <NavItemS>
          <LinkS onClick={closeMenu} to='contact'>
            Contact
          </LinkS>
        </NavItemS>
      </NavMenuS>
    </NavMenuContainerS>
  );
};
