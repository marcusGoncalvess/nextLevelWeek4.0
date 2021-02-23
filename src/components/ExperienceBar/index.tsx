import React from 'react';

import { Container, Bar } from './styles';

const ExperienceBar: React.FC = () => {
  return (
    <Container>
      <span>0 xp</span>
      <Bar currentPosition={50}>
        <div />

        <span>300 xp</span>
      </Bar>
      <span>600 xp</span>
    </Container>
  );
};

export default ExperienceBar;
