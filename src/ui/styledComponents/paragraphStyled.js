import styled from 'styled-components';

export const ParagraphS = styled.p`
  margin-bottom: 0.5rem;
  ${({ centered }) => centered ? 'text-align: center;' : ''}
  ${({ color }) => color ? `color: ${color};` : ''}
`;
