import styled from 'styled-components';

export const SectionS = styled.div``;

export const SectionHeaderS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  /* border-bottom: 1px solid ${(props) =>
    props.theme.sectionHeaderBorderBottom}; */
  margin-block-end: 1.5rem;
`;

export const TitledSectionS = styled(SectionS)`
  display: flex;
  flex-direction: column;
`;
