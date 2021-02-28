import React from "react";
import { useChallenges } from "../../contexts/ChallengesContext";

import { Container, Bar } from "./styles";

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useChallenges();

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <Bar currentPosition={percentToNextLevel}>
        <div />

        {currentExperience !== 0 && <span>{currentExperience} xp</span>}
      </Bar>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
};

export default ExperienceBar;
