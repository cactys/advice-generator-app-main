import { styled } from 'styled-components';
import { Card } from './Card';

const Wrapper = styled.main`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  min-height: 100vh;
  background-color: var(--color-bg);
`;

function App() {
  return (
    <Wrapper>
      <Card />
    </Wrapper>
  );
}

export default App;
