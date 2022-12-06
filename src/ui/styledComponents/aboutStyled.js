import styled from 'styled-components';
import { mediaQueries } from '../helpers/measures';

const textWidthPercent = 55;

export const AboutContentS = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  ${(props) =>
    props.changeToRow
      ? `
        @media (${mediaQueries.tablet}) {
          flex-direction: ${props.directionTablet};
        }
  `
      : ''}
`;

export const AboutText = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props) =>
    props.changeToRow
      ? `
        @media (${mediaQueries.tablet}) {
          width: ${textWidthPercent}%;
        }
  `
      : ''}
`;

export const AboutImageContainerS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  ${(props) =>
    props.changeToRow
      ? `
        @media (${mediaQueries.tablet}) {
          width: ${100 - textWidthPercent}%;
          padding-inline: 1.5rem;
        }
  `
      : ''}
`;

export const AboutImageS = styled.img`
  border-radius: 0.6rem;
  aspect-ratio: ${(props) => props.aspectRatio};
  width: ${(props) => props.width};
  object-fit: cover;
  max-width: ${(props) => props.maxWidth};
  margin-bottom: 0.5rem;
  box-shadow: ${(props) =>
    `${props.theme.shadowBoxPosition} ${props.theme.imageShadow}`};
  @media (${mediaQueries.tablet}) {
    width: 100%;
    ${(props) =>
    props.aspectRatioTablet
      ? `aspect-ratio: ${props.aspectRatioTablet};`
      : ''}
  }
`;
