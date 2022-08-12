import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  dropDownMenuTransition,
  headerHovers,
} from '../helpers/styleFunctions';
import { dropDownMenu } from '../helpers/strings';
import { FaTimes } from 'react-icons/fa';
// import { shadowsMeasures } from 'ui/helpers/themes';

export const NavMenuContainerS = styled.div`
  ${(props) =>
    props.type === dropDownMenu
      ? `
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
      background: ${props.theme.dropDownMenu};
      border-radius: 10px;
      border: 2px solid ${props.theme.dropDownMenuBorder};
      box-shadow: ${`${props.theme.shadowBoxPosition} ${props.theme.dropDownMenuShadow};`}
      overflow: hidden;
      height: auto;
      ${!props.active ? `top: -800%` : ''}
      `
      : ''};
`;

export const NavMenuS = styled.ul`
  display: flex;
  list-style-type: none;
  ${(props) =>
    props.type === dropDownMenu
      ? `
    width: 100%;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    border-radius: 10px;
    `
      : ''};
`;

export const NavItemS = styled.li`
  color: ${(props) => props.theme.fontColor};
  padding: 5px 10px;
  margin-inline: 5px;
  text-align: center;
  ${headerHovers}
  ${(props) =>
    props.type === dropDownMenu
      ? `
      margin-block: 10px;
      width: 100%;
    `
      : ''};
`;

export const LinkS = styled(Link)`
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
