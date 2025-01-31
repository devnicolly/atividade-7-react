import React, { useState, useEffect } from 'react';

function Temporizador() {
  const [tempo, setTempo] = useState(0);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let intervalo;
    if (ativo) {
      intervalo = setInterval(() => {
        setTempo(prevTempo => prevTempo + 1);
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [ativo]);

  const iniciarTemporizador = () => setAtivo(true);
  const pausarTemporizador = () => setAtivo(false);
  const reiniciarTemporizador = () => {
    setAtivo(false);
    setTempo(0);
  };

  return (
    <div className="temporizador">
      <h1>temporizador: {tempo} segundos</h1>
      <div className="btn-temporizador">
        <button onClick={iniciarTemporizador}>Iniciar</button>
        <button onClick={pausarTemporizador}>Pausar</button>
        <button onClick={reiniciarTemporizador}>Reiniciar</button>
      </div>
    </div>
  );
}

export default Temporizador;