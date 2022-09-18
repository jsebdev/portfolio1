import styled from 'styled-components';

export const SpanDescriptorS = styled.span`
  color: ${(props) => props.theme.spanDescriptor};
  font-size: ${({ size }) => (size ? size : '0.8rem')};
  text-align: center;
`;
