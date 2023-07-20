import { styled } from 'styled-components';
import { BsPauseFill } from 'react-icons/bs';

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
`;

const SeparatorIcon = styled.span`
  display: flex;
  align-items: center;
  margin: 0 0.2rem;
  height: 16px;
  width: 24px;
`;

export const Card = ({ children }) => {
  return (
    <Wrapper>
      {children}{' '}
      <CardSeparator>
        <SeparatorLine />
        <SeparatorIcon>
          <BsPauseFill size={23} />
        </SeparatorIcon>
        <SeparatorLine />
      </CardSeparator>
    </Wrapper>
  );
};
