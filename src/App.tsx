import React from 'react';
import GlobalStyle from './styles/global';

import ExperienceBar from './components/ExperienceBar';

import { Container } from './styles';

const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <ExperienceBar />
    </Container>
  );
};

export default App;
