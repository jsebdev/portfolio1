import React from 'react';
import { useWindowsSize } from '../../../customHooks/useWindowsSize';
import { NavButtonS } from '../../styledComponents/NavButtonStyled';
import { NavMenu } from './NavMenu';
import { NavS } from '../../styledComponents/NavStyled';
import { screenWidths } from '../../helpers/measures';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { toggleDisplayMenu, hideMenu } from './menuSlice';
import { DROP_DOWN_MENU } from '../../helpers/constants';
import { ShadowLayer } from '../../styledComponents/ShadowLayer';

export const Nav = () => {
  const dispatch = useDispatch();
  const { width } = useWindowsSize();
  const displayedMenu = useSelector((state) => state.menu.displayedMenu);
  const closeMenu = () => {
    dispatch(hideMenu());
  };

  return (
    <>
      <NavS>
        {width < screenWidths.desktop ? (
          <NavButtonS onClick={() => dispatch(toggleDisplayMenu())} />
        ) : (
          <NavMenu />
        )}
      </NavS>
      {width < screenWidths.desktop && (
        <>
          <NavMenu
            closeMenu={closeMenu}
            type={DROP_DOWN_MENU}
            active={displayedMenu}
          />
          <ShadowLayer active={displayedMenu} onClick={closeMenu} />
        </>
      )}
    </>
  );
};
