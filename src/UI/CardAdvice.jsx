import { styled } from 'styled-components';

const Wrapper = styled.p.attrs({
  className: 'advice',
})`
  display: flex;
  flex: 1;
  margin: 1rem auto;
  text-align: center;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  transition: var(--transition);

  @media (max-width: 425px) {
    font-size: var(--fs-sm);
  }
`;

export const CardAdvice = ({ context }) => {
  return <Wrapper>{context ? `"${context}"` : ''}</Wrapper>;
};
