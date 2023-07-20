import { useState, useEffect } from 'react';
import { keyframes, styled } from 'styled-components';
import { fadeIn } from 'react-animations';

import { BsDice5Fill, BsMoonFill } from 'react-icons/bs';

import { api } from '../utils/api';
import { Card } from './Card';

import { ThemeChange } from '../UI/ThemeChange';
import { Button } from '../UI/Button';
import { CardAdvice } from '../UI/CardAdvice';
import { CardTitle } from '../UI/CardTitle';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { fetchAdvices } from '../services/asyncThunk/fetchAdvices';

const Animation = keyframes`${fadeIn}`;

const AnimatedWrapper = styled.div`
  display: flex;
  flex: 1 auto;

  animation: ${Animation} 2s alternate;
`;

const Wrapper = styled.main`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  min-height: 100vh;
  background-color: var(--color-bg);
`;

function App() {
  const [theme, setTheme] = useState('dark');
  // const [advices, setAdvices] = useState('');

  const { advices, status } = useSelector((store) => store.advices);
  const dispatch = useDispatch();

  console.log(status);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const handleRenderAdvice = () => {
    dispatch(fetchAdvices());
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Wrapper>
      <Card>
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
