import { styled } from 'styled-components';

const Wrapper = styled.button.attrs(({ $position, $top, $left }) => ({
  type: 'button',
  style: {
    position: $position,
    top: $top,
    left: $left,
  },
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-ui-base);
  border: none;
  padding: 0.75rem;
  border-radius: var(--radii-ui);
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-alt);
  }
`;

export const Button = ({ children, onClick, position, top, left }) => {
  return (
    <Wrapper $position={position} $top={top} $left={left} onClick={onClick}>
      {children}
    </Wrapper>
  );
};
