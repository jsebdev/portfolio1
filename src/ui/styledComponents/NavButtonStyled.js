import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { headerIconsSize } from '../helpers/measures';
import { headerHovers } from '../helpers/styleFunctions';

const buttonSize = headerIconsSize;
const iconExtraSize = 10;

export const NavButtonS = styled(GiHamburgerMenu)`
  height: ${buttonSize + iconExtraSize}px;
  width: ${buttonSize + iconExtraSize}px;
  color: ${(props) => props.theme.fontColor};
  ${headerHovers}
`;
