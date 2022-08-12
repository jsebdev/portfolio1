import styled from 'styled-components';
import { mediaQueries } from '../helpers/measures';
import { SectionS } from './SectionStyled';

const thumbnailWidth = 40;

export const ProjectsContainerS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectItemContainerS = styled.div`
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
`;

export const ProjectThumbnailS = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ProjectItemTextS = styled.div`
  @media (${mediaQueries.tablet}) {
    width: ${100 - thumbnailWidth}%;
    padding-inline: 2rem;
  }
`;
