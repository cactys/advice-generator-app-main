import styled, { keyframes } from 'styled-components';

const go = keyframes`
  100% {
    background: var(--color-text);
    flex: 1;
    box-shadow: 0 0 20px var(--color-text);
  }
`;

const Animated = () => {
  let styles = '';

  for (let i = 0; i < 10; i += 1) {
    styles += `
      &:nth-child(${i}) {
        animation-delay: calc((0.8s / 10) * (${i} - 10));
      }
    `;
  }

  return styles;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const BoxLoader = styled.div`
  position: absolute;
  width: 210px;
  height: 1px;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
`;

const Loader = styled.div`
  height: 100%;
  display: flex;
  transform: translateZ(0);

  & span {
    flex: 10;
    background: transparent;
    animation: ${go} 0.8s infinite alternate ease;
    box-shadow: 0 0 0 transparent;

    ${Animated};
  }
`;

export const Preloader = () => {
  return (
    <Wrapper>
      <BoxLoader>
        <Loader>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </Loader>
      </BoxLoader>
    </Wrapper>
  );
};
