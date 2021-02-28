import React, { useState, useEffect } from "react";
import { useChallenges } from "../../contexts/ChallengesContext";
import { useCountdown } from "../../contexts/CountdownContext";

import { Container, CountdownButton } from "./styles";

const Countdown = () => {
  const {
    isActive,
    hasFinished,
    minutes,
    resetCountdown,
    seconds,
    startCountdown,
  } = useCountdown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <CountdownButton disabled onClick={resetCountdown}>
          Ciclo encerrado
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton
              type="button"
              className="active"
              onClick={resetCountdown}
            >
              Abandonar o ciclo
            </CountdownButton>
          ) : (
            <CountdownButton type="button" onClick={startCountdown}>
              Iniciar um ciclo
            </CountdownButton>
          )}
        </>
      )}
    </>
  );
};

export default Countdown;
