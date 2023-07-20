import { styled } from 'styled-components';

const Wrapper = styled.h1`
  margin: 0;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);
  transform: scale(0.6);
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: var(--color-ui-base);
  transition: var(--transition);
`;

export const CardTitle = ({ id='', title='' }) => {
  return <Wrapper>{title + `${title !== '' ? ' #' : ''}` +  id }</Wrapper>;
};
