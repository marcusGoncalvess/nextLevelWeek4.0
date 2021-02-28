import React from "react";
import { useChallenges } from "../../contexts/ChallengesContext";

import { Container, Overlay } from "./styles";

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useChallenges();

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Voce alcançou novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
