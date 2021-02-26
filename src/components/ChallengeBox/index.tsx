import React from "react";
import { useChallenges } from "../../contexts/ChallengesContext";

import { Container, ChallengeNotActive, ChallengeActive } from "./styles";

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useChallenges();
  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="body" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button type="button" className="failed" onClick={resetChallenge}>
              Falhei
            </button>
            <button type="button" className="success">
              Completei
            </button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
};

export default ChallengeBox;
