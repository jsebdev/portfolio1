import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

export const FooterS = styled.footer`
  display: flex;
  justify-content: space-around;
  padding-block: 2rem;
  border-top: 1px solid ${(props) => props.theme.separatorBorder};
`;

export const SocialButtonsFooterContainerS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const commonIconStyle = (props) => `
  color: ${props.theme.fontColor};
  cursor: pointer;
  margin: 0.5rem;
  font-size: 1.5rem;
`;

export const GithubIconS = styled(BsGithub)`
  ${(props) => commonIconStyle(props)}
`;

export const LinkedInIconS = styled(BsLinkedin)`
  ${(props) => commonIconStyle(props)}
`;

export const TwitterIconS = styled(BsTwitter)`
  ${(props) => commonIconStyle(props)}
`;
