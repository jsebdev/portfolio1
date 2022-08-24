import styled from 'styled-components';
import { headerHovers } from '../helpers/styleFunctions';

export const LogoNameS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.logo};
  font-weight: 900;
  font-size: 1rem;
  padding: 5px;
  text-align: center;
  margin-inline: 10px;
  /* ${headerHovers}; */
`;
