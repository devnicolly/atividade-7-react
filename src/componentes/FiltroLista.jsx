import React, { useState } from 'react';

function FiltroLista() {
  const nomes = ["ana clara", "nicolly", "carla", "nicole", "taylor", "olivia", "logan"];
  const [filtro, setFiltro] = useState('');

  const nomesFiltrados = nomes.filter(nome => nome.toLowerCase().includes(filtro.toLowerCase()));

  return (
    <div className="filtro-lista-container">
      <h1>filtro</h1>
      <input
        type="text"
        placeholder="Digite um nome"
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
      />
      <ul>
        {nomesFiltrados.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default FiltroLista;
