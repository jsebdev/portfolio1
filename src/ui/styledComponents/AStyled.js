import styled from "styled-components";

export const AS = styled.a.attrs({ target: '_blank', rel: 'noreferrer' })`
  text-decoration: ${({ textDecoration }) => textDecoration ? textDecoration : `none`};
  color: inherit;
`;