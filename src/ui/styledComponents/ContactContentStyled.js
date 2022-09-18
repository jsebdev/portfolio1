import styled from 'styled-components';
import { mediaQueries } from 'ui/helpers/measures';
import { MainButtonS } from './ButtonsStyled';

export const ContactContentS = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactFormContainerS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (${mediaQueries.tablet}) {
    flex-direction: row-reverse;
  }
`

export const ContactImageContainerS = styled.div`
  padding: 0rem;
  margin-block-end: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  @media (${mediaQueries.tablet}) {
    width: 50%;
  }
`;

const [x, y, blur] = ['5px', '6px', '0px']
export const ContactImageS = styled.img`
  width: 100%;
  filter: drop-shadow(${x} ${y} ${blur} ${({ theme }) => `${theme.imageShadow}`});
  max-width: 250px;
  @media (${mediaQueries.tablet}) {
    width: 80%;
  }
`;

export const ContactFormS = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputFormS = styled.input`
  color: ${(props) => props.theme.fontColor};
  margin-block: 0.5rem;
  padding: 0.6rem;
  padding-left: 0.7rem;
  border: ${(props) => props.theme.inputBorder};
  border-radius: 0.5rem;
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

export const FormButtonS = styled(MainButtonS).attrs({ as: 'input', value: 'Send', type: 'submit' })`
  width: 'fit-content';
  margin: 1rem;
`;

export const SocialDivS = styled.div`
  margin-block: 2rem;
`;

export const SocialLinksContactContainerS = styled.div`
  margin-block: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialLinkContactS = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  margin-block: 0.2rem;
  padding: 0.3rem;
  border-radius: 0.4rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: ${(props) =>
    `${props.theme.shadowBoxPosition} ${props.theme.imageShadow}`};
  }
`;

export const SocialNameS = styled.span`
  color: ${(props) => props.theme.socialName};
  font-weight: bold;
`;
