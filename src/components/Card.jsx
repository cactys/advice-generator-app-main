import { keyframes, styled } from 'styled-components';
import { BsDice5Fill, BsMoonFill, BsPauseFill } from 'react-icons/bs';
import { ThemeChange } from '../UI/ThemeChange';
import { Button } from '../UI/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvices } from '../services/asyncThunk/fetchAdvices';
import { CardTitle } from '../UI/CardTitle';
import { CardAdvice } from '../UI/CardAdvice';
import { Preloader } from '../UI/Preloader/Preloader';
import { fadeIn } from 'react-animations';
import { setSelectTheme } from '../services/slices/themeSlice';

const Animation = keyframes`${fadeIn}`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 520px;
  width: 100%;
  min-height: 280px;
  background-color: var(--color-ui-alt);
  padding: 1.75rem 2rem;
  border-radius: var(--radii);
  align-items: center;
  position: relative;
  box-shadow: var(--shadow);
`;

const CardSeparator = styled.div`
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.75rem auto;
  align-items: center;
  width: 100%;
  min-height: 32px;
  max-height: 32px;
  height: 100%;

  transition: var(--transition);
`;

const SeparatorLine = styled.span`
  height: 1px;
  width: 100%;
  display: inline-block;
  background-color: var(--color-text-alt);
  box-shadow: var(--shadow);
`;

const SeparatorIcon = styled.span`
  display: flex;
  align-items: center;
  margin: 0 0.2rem;
  height: 16px;
  width: 24px;
`;

const AnimatedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  flex: 1 auto;

  animation: ${Animation} 2s alternate;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const Card = () => {
  const { advices, status } = useSelector((store) => store.advices);
  const { theme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  const toggleTheme = () =>
    dispatch(setSelectTheme(theme === 'dark' ? 'light' : 'dark'));

  const handleRenderAdvice = () => {
    dispatch(fetchAdvices());
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Wrapper>
      {status ? (
        status === 'loading' ? (
          <Preloader />
        ) : (
          <AnimatedWrapper>
            <CardTitle title="Advice" id={advices.id} />
            <CardAdvice context={advices.advice} />
          </AnimatedWrapper>
        )
      ) : (
        <EmptyContainer>Click to green button...</EmptyContainer>
      )}
      <CardSeparator>
        <SeparatorLine />
        <SeparatorIcon>
          <BsPauseFill size={23} />
        </SeparatorIcon>
        <SeparatorLine />
      </CardSeparator>
      <ThemeChange
        onClick={toggleTheme}
        position="absolute"
        top="0.75rem"
        right="0.75rem"
      >
        {theme} Theme <BsMoonFill />
      </ThemeChange>
      <Button
        position="absolute"
        top="calc(100% - 20px)"
        left="calc(50% - 20px)"
        onClick={handleRenderAdvice}
      >
        <BsDice5Fill size={16} />
      </Button>
    </Wrapper>
  );
};
