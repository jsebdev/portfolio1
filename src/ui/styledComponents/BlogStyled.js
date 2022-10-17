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
`;

export const BlogBlockImageS = styled.img`
  object-fit: cover;
  aspect-ratio: 90/175;
  border-radius: 0.6rem;
  object-position: 0% 47%;
  max-width: 14rem;
  box-shadow: ${(props) =>
    `${props.theme.shadowBoxPosition} ${props.theme.imageShadow}`};
`;

export const StackContainerS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;