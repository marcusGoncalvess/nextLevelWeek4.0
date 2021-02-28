import React from "react";
import { useChallenges } from "../../contexts/ChallengesContext";
import { useCountdown } from "../../contexts/CountdownContext";

import { Container, ChallengeNotActive, ChallengeActive } from "./styles";

const ChallengeBox = () => {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
  } = useChallenges();

  const { resetCountdown } = useCountdown();

  function handleChallengeSuccess() {
    completeChallenge();
    resetChallenge();
    resetCountdown();
  }

  function handleChallengeFail() {
    resetChallenge();
    resetCountdown();
  }

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
            <button type="button" className="failed" onClick={handleChallengeFail}>
              Falhei
            </button>
            <button
              type="button"
              className="success"
              onClick={handleChallengeSuccess}
            >
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
