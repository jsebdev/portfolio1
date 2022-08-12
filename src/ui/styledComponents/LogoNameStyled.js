import styled from 'styled-components';
import { mediaQueries } from '../helpers/measures';
import { headerHovers } from '../helpers/styleFunctions';

export const LogoNameS = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.logo};
  font-weight: 900;
  font-size: 1rem;
  padding: 5px;
  text-align: center;
  margin-inline: 10px;
  ${headerHovers};
  @media (${mediaQueries.desktop}) {
    order: 1;
  }
`;
