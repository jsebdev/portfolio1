import styled from 'styled-components';
import { mediaQueries } from '../helpers/measures';

export const HeaderS = styled.header`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.header};
  padding: 5px 30px;
  border-radius: 5px;
  margin-bottom: 3rem;
  box-shadow: ${(props) =>
    `${props.theme.shadowBoxPosition} ${props.theme.headerShadow}`};
  position: relative;
  @media (${mediaQueries.desktop}) {
    justify-content: space-between;
  }
`;
