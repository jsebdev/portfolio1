import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaQueries } from 'ui/helpers/measures';
import { MainButtonS } from './ButtonsStyled';
import { ParagraphS } from './paragraphStyled';

export const ContactContentS = styled.div`
  display: flex;
  flex-direction: column;
  @media (${mediaQueries.tablet}) {
    flex-direction: row;
  }
`;

export const ContactImageContainerS = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  @media (${mediaQueries.tablet}) {
    width: 50%;
  }
`;

export const ContactImageS = styled.img`
  width: 100%;
`;

export const ContactFormS = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputFormS = styled.input`
  color: ${(props) => props.theme.fontColor};
  margin-block: 0.5rem;
  padding: 0.2rem;
  padding-left: 0.7rem;
  border: ${(props) => props.theme.inputBorder};
  border-radius: 0.5rem;
  min-height: 2.5rem;
  background: ${(props) => props.theme.inputBackground};
  box-shadow: ${(props) =>
    `${props.theme.shadowBoxPosition} ${props.theme.imageShadow}`};
  width: 100%;
  &::placeholder {
    color: ${(props) => props.theme.inputPlaceholder};
    opacity: 1;
  }
`;

export const AreaInputFormS = styled(InputFormS).attrs({ as: 'textarea' })``;

export const FormButtonS = styled(MainButtonS)`
  width: 'fit-content';
  margin: 1rem;
`;

export const SocialDivS = styled.div`
  margin-block: 2rem;
`;

export const SocialLinksContainerS = styled.div`
  margin-block: 2rem;
`;

export const SocialLinkS = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
`;

export const SocialNameS = styled.span`
  color: ${(props) => props.theme.socialName};
  font-weight: bold;
`;
