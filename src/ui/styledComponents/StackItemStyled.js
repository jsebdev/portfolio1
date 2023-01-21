import styled from "styled-components";

export const StackItemContainerS = styled.a`
  margin-block: 0.5rem;
  margin-inline: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;

const logoSize = '50px'
export const LogoContainerS = styled.div`
  width: ${logoSize};
  height: ${logoSize};
  margin-bottom: 1rem;
`

export const LogoS = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;