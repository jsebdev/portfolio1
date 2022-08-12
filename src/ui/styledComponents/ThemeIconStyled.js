import styled from 'styled-components';
import { BsFillCloudMoonFill, BsFillSunFill } from 'react-icons/bs';
import { headerIconsSize, mediaQueries } from '../helpers/measures';
import { headerHovers } from '../helpers/styleFunctions';

const iconExtraSize = 5;

const iconStyle = (props) => `
  color: ${props.theme.fontColor};
  width: ${headerIconsSize + iconExtraSize}px;
  height: ${headerIconsSize + iconExtraSize}px;
  cursor: pointer;
`;

export const MoonIcon = styled(BsFillCloudMoonFill)`
  ${(props) => iconStyle(props)}
`;

export const SunIcon = styled(BsFillSunFill)`
  ${(props) => iconStyle(props)}
`;

export const ThemeIconS = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (${mediaQueries.desktop}) {
    order: 3;
  }
  ${headerHovers};
`;
