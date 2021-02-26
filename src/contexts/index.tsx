import React, { ReactNode } from "react";

import { ChallengesProvider } from "./ChallengesContext";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => (
  <ChallengesProvider>{children}</ChallengesProvider>
);

export default AppProvider;
