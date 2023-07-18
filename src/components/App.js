import { useState, useEffect } from 'react';
import { keyframes, styled } from 'styled-components';
import { fadeIn, bounceIn } from 'react-animations';

import { BsPauseFill, BsDice5Fill, BsMoonFill } from 'react-icons/bs';
import { api } from '../utils/api';
import { DEFAULT_ADVICE } from '../utils/constants';

const Animation = keyframes`${bounceIn}`;

const Wrapper = styled.main`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  min-height: 100vh;
  background-color: var(--color-bg);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 520px;
  width: 100%;
  background-color: var(--color-ui-alt);
  padding: 1.75rem 2rem;
  border-radius: var(--radii);
  align-items: center;
  position: relative;
  box-shadow: var(--shadow);
`;

const CardTitle = styled.h1`
  margin: 0;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);
  transform: scale(0.6);
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: var(--color-ui-base);
`;

const CardAdvice = styled.p.attrs({
  className: 'advice',
})`
  .advice {
    font-size: 68px;
  }
  display: inline-block;
  margin: 1rem auto;
  text-align: center;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);

  animation: ${Animation} 2s forwards;

  @media (max-width: 425px) {
    font-size: var(--fs-sm);
  }
`;

const CardSeparator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.75rem auto;
  align-items: center;
  width: 100%;

  transition: var(--transition);
`;

const SeparatorLine = styled.span`
  height: 1px;
  width: 100%;
  display: inline-block;
  background-color: var(--color-text-alt);
`;

const SeparatorIcon = styled.span`
  display: flex;
  align-items: center;
  margin: 0 0.2rem;
  height: 16px;
  width: 24px;
`;

const Button = styled.button.attrs({
  type: 'button',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: calc(100% - 20px);
  left: calc(50% - 20px);
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

const ThemeChange = styled.div`
  text-transform: capitalize;
  display: flex;
  column-gap: 0.2rem;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-weight: var(--fw-light);
  font-size: 12px;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--color-ui-base);
  }
`;

function App() {
  const [theme, setTheme] = useState('dark');
  const [advices, setAdvices] = useState(DEFAULT_ADVICE);

  const { advice, id } = advices?.slip;

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const handleRenderAdvice = () => {
    api
      .getAdvice()
      .then((res) => {
        if (res) setAdvices(res);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Wrapper>
      <Card>
        <ThemeChange onClick={toggleTheme}>
          {theme} Theme <BsMoonFill />
        </ThemeChange>
        <CardTitle>Advice #{id}</CardTitle>
        <CardAdvice>"{advice ? advice : ''}"</CardAdvice>
        <CardSeparator>
          <SeparatorLine />
          <SeparatorIcon>
            <BsPauseFill size={23} />
          </SeparatorIcon>
          <SeparatorLine />
        </CardSeparator>
        <Button onClick={handleRenderAdvice}>
          <BsDice5Fill size={16} />
        </Button>
      </Card>
    </Wrapper>
  );
}

export default App;
