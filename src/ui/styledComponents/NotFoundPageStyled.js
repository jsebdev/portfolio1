import styled from "styled-components";
import { mediaQueries } from "ui/helpers/measures";

export const NotFoundContainerS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BigMessageS = styled.p`
  font-size: 4.5rem;
  font-weight: bolder;
  @media (${mediaQueries.tablet}) {
    font-size: 6.5rem;
  }
  @media (${mediaQueries.desktop}) {
    font-size: 8.5rem;
  }
`;