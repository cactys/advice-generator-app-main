import { useEffect } from 'react';
import { keyframes, styled } from 'styled-components';
import { bounceIn } from 'react-animations';

import { BsDice5Fill, BsMoonFill } from 'react-icons/bs';

import { Dots } from 'react-preloaders';

import { Card } from './Card';

import { ThemeChange } from '../UI/ThemeChange';
import { Button } from '../UI/Button';
import { CardAdvice } from '../UI/CardAdvice';
import { CardTitle } from '../UI/CardTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvices } from '../services/asyncThunk/fetchAdvices';
import { setSelectTheme } from '../services/slices/themeSlice';
import Circle from 'react-preloaders/lib/Circle/Circle';

const Animation = keyframes`${bounceIn}`;

const AnimatedWrapper = styled.div`
  display: flex;
  flex: 1 auto;

  animation: ${Animation} 1s forwards;
`;

const Wrapper = styled.main`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  min-height: 100vh;
  background-color: var(--color-bg);
`;

function App() {
  const { advices, status } = useSelector((store) => store.advices);
  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setSelectTheme(theme === 'dark' ? 'light' : 'dark'));
  };

  const handleRenderAdvice = () => {
    dispatch(fetchAdvices());
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Wrapper>
      <Card>
        <Circle />
        {status === 'resolved' ? (
          <AnimatedWrapper>
            <CardTitle title="Advice" id={advices.id} />
          </AnimatedWrapper>
        ) : (
          <CardTitle />
        )}
        <ThemeChange
          onClick={toggleTheme}
          position="absolute"
          top="0.75rem"
          right="0.75rem"
        >
          {theme} Theme <BsMoonFill />
        </ThemeChange>
        {status === 'resolved' ? (
          <AnimatedWrapper>
            <CardAdvice context={advices.advice} />
          </AnimatedWrapper>
        ) : (
          <CardAdvice />
        )}
        <Button
          position="absolute"
          top="calc(100% - 20px)"
          left="calc(50% - 20px)"
          onClick={handleRenderAdvice}
        >
          <BsDice5Fill size={16} />
        </Button>
      </Card>
    </Wrapper>
  );
}

export default App;
