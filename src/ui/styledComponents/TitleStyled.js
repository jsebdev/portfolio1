import styled from 'styled-components';
import {
  shadowText,
  titleColor,
  titleShadowColor,
} from '../helpers/styleFunctions';

export const TitleS = styled.h2`
  font-size: 2rem;
  color: ${titleColor};
  ${(props) => shadowText(props)(titleShadowColor(props))}
`;

export const BigNameS = styled.span`
  color: ${(props) => props.theme.bigName};
  ${(props) => shadowText(props)(props.theme.bigNameShadow)}
  white-space: nowrap;
`;

export const SectionTitleS = styled(TitleS)`
  font-size: 1.8rem;
  margin: 0;
  margin-inline-end: 1rem;
`;

export const SubTitleS = styled.h3``;
