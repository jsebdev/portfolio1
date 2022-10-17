import styled from 'styled-components';
import { mediaQueries } from 'ui/helpers/measures';

export const SectionS = styled.div``;

export const SectionHeaderS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ bottomMargin }) => bottomMargin || '0.5rem'};
  @media (${mediaQueries.tablet}) {
    margin-block-end: 1.5rem;
  }
`;

export const TitledSectionS = styled(SectionS)`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;
