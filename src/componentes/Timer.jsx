import React, { useState, useEffect } from "react";

 function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      alert("O tempo acabou!");
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    setTimeLeft(seconds);
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Timer</h1>

      <input
        type="number"
        min="1"
        placeholder="digite os segundos"
        value={seconds}
        onChange={(e) => setSeconds(Number(e.target.value))}
      />

      <div>{timeLeft}segundos restantes</div>
      <div>
        <button onClick={startTimer}>
          Iniciar
        </button>
        <button onClick={pauseTimer}>
          Pausar
        </button>
        <button onClick={resetTimer}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default Timer