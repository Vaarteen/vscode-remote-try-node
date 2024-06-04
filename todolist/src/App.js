import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <AppWrapper>
      <Header>
        <p>Éditez <code>src/App.js</code> et sauvegardez pour recharger</p>
      </Header>
    </AppWrapper>
  );
}
export default App;
