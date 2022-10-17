import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkS = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
`;
