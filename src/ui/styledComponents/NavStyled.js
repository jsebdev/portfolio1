import styled from 'styled-components';
import { mediaQueries } from '../helpers/measures';

export const NavS = styled.nav`
  display: flex;
  /* justify-content: center; */
  @media (${mediaQueries.desktop}) {
    order: 2;
  }
`;
