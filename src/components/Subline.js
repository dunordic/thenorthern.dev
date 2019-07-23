import styled from '@emotion/styled';

const Subline = styled.div`
  font-size: var(--font-size-small);
  color: var(--colors-grey-lightest);
  ${props => props.sectionTitle && 'margin-top: -3rem'};
  ${props => props.sectionTitle && 'margin-bottom: 4rem'};
  ${props => props.sectionTitle && 'text-align: center'};
`;

export default Subline;
