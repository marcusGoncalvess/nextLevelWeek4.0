import React, { useState, useEffect } from "react";
import { useChallenges } from "../../contexts/ChallengesContext";

import { Container, CountdownButton } from "./styles";

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const { startNewChallenge } = useChallenges();

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

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
