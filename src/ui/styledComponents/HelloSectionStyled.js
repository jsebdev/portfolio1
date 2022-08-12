import styled from 'styled-components';
import { mediaQueries } from '../helpers/measures';
import { ImageS } from './imagesStyled';
import { SectionS } from './SectionStyled';

export const HelloSectionS = styled(SectionS)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (${mediaQueries.desktop}) {
    display: grid;
    grid-template-columns: 400px 1fr;
  }
`;

export const HiMessagesS = styled.div`
  margin-bottom: 50px;
`;

export const ProfileImageContainerS = styled.div`
  width: 70%;
  max-height: 250px;
  max-width: 250px;
  display: flex;
  justify-content: center;
  @media (${mediaQueries.desktop}) {
    width: 100%;
    max-height: none;
    max-width: none;
  }
`;

export const ProfileImageS = styled(ImageS)`
  border-radius: 50%;
  object-fit: cover;
  width: 100%;
  width: 300px;
  aspect-ratio: 1;
  box-shadow: ${(props) =>
    `${props.theme.shadowBoxPosition} ${props.theme.imageShadow}`};
`;
