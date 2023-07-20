import { styled } from 'styled-components';

const Wrapper = styled.div.attrs(({ $position, $top, $right }) => ({
  style: {
    position: $position,
    top: $top,
    right: $right,
  },
}))`
  text-transform: capitalize;
  display: flex;
  column-gap: 0.2rem;
  font-weight: var(--fw-light);
  font-size: 12px;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--color-ui-base);
  }
`;

export const ThemeChange = ({ children, onClick, position, top, right }) => {
  return (
    <Wrapper $position={position} $top={top} $right={right} onClick={onClick}>
      {children}
    </Wrapper>
  );
};
