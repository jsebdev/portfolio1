import styled from 'styled-components';
import { mediaQueries } from 'ui/helpers/measures';

const ButtonS = styled.button`
  cursor: pointer;
`;

export const MainButtonS = styled(ButtonS)`
  padding-inline: 0.6rem;
  padding-block: 0.4rem;
  background-color: ${(props) => props.theme.mainButton};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: ${(props) => props.theme.mainButtonText};
  box-shadow: ${(props) =>
    `${props.theme.shadowBoxPosition} ${props.theme.shadowBox}`};
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
    filter: brightness(90%);
  }
  position: relative;
`;

export const SecondaryButtonS = styled(ButtonS)`
  background: transparent;
  border-radius: 1rem;
  padding: 0.3rem 0.6rem;
  border: 2px solid ${(props) => props.theme.secondaryButton0};
  font-weight: bold;
  color: transparent;
  background: ${({
    theme,
  }) => `linear-gradient(45deg, ${theme.secondaryButton1} 50%, ${theme.secondaryButton0} 0) var(--p, 100%) / 250%
      no-repeat,
    linear-gradient(45deg, ${theme.secondaryButton0} 50%, ${theme.secondaryButton1} 0) var(--p, 100%) / 250% no-repeat`};
  -webkit-background-clip: text, padding-box;
  background-clip: text, padding-box;
  transition: 0.4s;
  &:hover {
    --p: 0%;
  }
`;

export const ButtonsCodeContainerS = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 20% 1rem;
  @media (${mediaQueries.tablet}) {
    justify-content: flex-start;
  }
  & button {
    @media (${mediaQueries.tablet}) {
      margin-left: 1rem;
    }
  }
`;
