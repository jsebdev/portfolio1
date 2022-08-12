import styled from 'styled-components';

export const MainButton = styled.button`
  padding-inline: 0.6rem;
  padding-block: 0.4rem;
  background-color: ${(props) => props.theme.mainButton};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: ${(props) => props.theme.mainButtonText};
  box-shadow: ${(props) =>
    `${props.theme.shadowBoxPosition} ${props.theme.shadowBox}`};
`;
