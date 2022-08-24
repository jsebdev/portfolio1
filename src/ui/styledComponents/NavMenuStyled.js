import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  dropDownMenuTransition,
  headerHovers,
} from '../helpers/styleFunctions';
import { DROP_DOWN_MENU, FOOTER, HEADER } from '../helpers/constants';
import { FaTimes } from 'react-icons/fa';
import { mediaQueries } from 'ui/helpers/measures';
// import { shadowsMeasures } from 'ui/helpers/themes';

export const NavMenuContainerS = styled.div`
  &.${DROP_DOWN_MENU}  {
      ${dropDownMenuTransition}
      font-weight: bold;
      display: flex;
      padding-block: 20px;
      padding-inline: 30px;
      position: absolute;
      top: 110%;
      margin-left: auto;
      margin-right: auto;
      width: 90vw;
      flex-direction: column;
      align-items: flex-end;
      z-index: 2;
      background: ${(props) => props.theme.dropDownMenu};
      border-radius: 10px;
      border: 2px solid ${(props) => props.theme.dropDownMenuBorder};
      box-shadow: ${(props) =>
        `${props.theme.shadowBoxPosition} ${props.theme.dropDownMenuShadow};`}
      overflow: hidden;
      height: auto;
      ${(props) => (!props.active ? `top: -800%` : '')}
  }
  &.${FOOTER} {
    display: none;
    @media (${mediaQueries.desktop}) {
      display: flex;
    }
  }
`;

export const NavMenuS = styled.ul`
  display: flex;
  list-style-type: none;
  .${DROP_DOWN_MENU} & {
    width: 100%;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    border-radius: 10px;
  }
  .${FOOTER} & {
    flex-direction: column;
  }
`;

export const NavItemS = styled.li`
  color: ${(props) => props.theme.fontColor};
  padding: 5px 10px;
  margin-inline: 5px;
  text-align: center;
  .${HEADER} & {
    ${headerHovers}
  }
  .${DROP_DOWN_MENU} & {
    margin-block: 10px;
    width: 100%;
  }
`;

export const LinkHeaderS = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
`;

export const CloseNavS = styled(FaTimes)`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.fontColor};
  position: absolute;
  z-index: 3;
`;
