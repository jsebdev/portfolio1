import styled from 'styled-components';
import { mediaQueries } from '../helpers/measures';

const thumbnailWidth = 40;

export const ProjectsContainerS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (${mediaQueries.desktop}) {
    padding-inline: 1.5rem;
  }
`;

export const ProjectItemContainerS = styled.div`
  color: inherit;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-end: 4rem;
  max-width: 400px;
  @media (${mediaQueries.tablet}) {
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    max-width: inherit;
    justify-content: space-around;
  }
`;

export const ProjectThumbnailContainerS = styled.div`
  position: relative;
  width: 100%;
  /* border: 1px solid ${(props) => props.theme.projectItemBorder}; */
  border-radius: 10px;
  overflow: hidden;
  margin-block-end: 1rem;
  transition: 0.3s;
  &::after {
    content: '';
    display: block;
    padding-bottom: calc(100% * (3 / 5));
  }
  @media (${mediaQueries.tablet}) {
    width: ${thumbnailWidth}%;
  }
  box-shadow: ${(props) =>
    `${props.theme.shadowBoxPosition} ${props.theme.imageShadow}`};
  &:hover {
    box-shadow: ${(props) =>
    `${props.theme.shadowBoxPositionHover} ${props.theme.imageShadow}`};
  }
`;

export const ProjectThumbnailS = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const ProjectItemSideS = styled.div`
  @media (${mediaQueries.tablet}) {
    width: ${100 - thumbnailWidth}%;
    padding-inline: 2rem;
  }
`;
