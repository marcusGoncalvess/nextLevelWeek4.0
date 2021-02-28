import { ReactNode } from "react";

export interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  challengesCompleted: number;
  currentExperience: number;
}

export interface CountdownProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

export interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  activeChallenge: Challenge;
  closeLevelUpModal: () => void;
}
