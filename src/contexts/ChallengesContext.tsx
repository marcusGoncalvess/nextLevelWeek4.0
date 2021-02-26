import { createContext, useContext, useState } from "react";
import challenges from "../../challenges.json";

import {
  ChallengesContextData,
  ChallengesProviderProps,
} from "../dtos/IContextsDTO";

export const ChallengesContext = createContext<ChallengesContextData>(
  {} as ChallengesContextData
);

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        levelUp,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export function useChallenges() {
  const context = useContext(ChallengesContext);
  if (!context) throw new Error("must be used within");
  return context;
}
