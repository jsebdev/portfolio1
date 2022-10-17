import styled from 'styled-components';

export const ParagraphS = styled.p`
  margin-bottom: 0.5rem;
  ${({ centered }) => centered ? 'text-align: center;' : ''}
  ${({ color }) => color ? `color: ${color};` : ''}
`;

export const BigStoryChatbotS = styled(ParagraphS)`
  font-size: 1.5rem;
  text-align: center;
  padding-inline: 1rem;
`;