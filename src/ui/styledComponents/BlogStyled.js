import styled from "styled-components";
import { mediaQueries } from "ui/helpers/measures";

export const BlogBlockS = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-start: 1rem;
  margin-block-end: 2rem;
  @media (${mediaQueries.tablet}) {
    flex-direction: ${({ reverted }) => reverted ? 'row-reverse' : 'row'};
  }
`;

export const BlogBlockTextS = styled.div`
  @media (${mediaQueries.tablet}) {
    width: 55%;
    display: flex;
    align-items: center;
  }
`;

export const BlogBlockImageContainerS = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  &.maximized {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    background-color: ${({ theme }) => theme.shadowLayer};
  }
`;

export const BlogBlockImageS = styled.img`
  object-fit: cover;
  aspect-ratio: 90/175;
  border-radius: 0.6rem;
  object-position: 0% 47%;
  ${({ maximized, theme }) => maximized ? `
    max-width: 100%;
  ` : `
    max-width: 14rem;
    box-shadow: ${theme.shadowBoxPosition} ${theme.imageShadow};
  `}
`;

export const StackContainerS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;