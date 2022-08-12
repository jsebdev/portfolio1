import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
  background-color: ${(props) => props.theme.body};
}
* {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
}
`;
