import styled from '@emotion/styled';

const SectionTitle = styled.div`
  font-size: var(--font-size-small);
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  color: var(--color-grayDark);
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 4rem;

  &:after {
    content: '';
    height: 1px;
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    background: var(--colors-grey-lightest);
  }
`;

export default SectionTitle;
