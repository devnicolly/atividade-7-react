import React, { useState } from 'react';

function Abas() {
  const [abaAtiva, setAbaAtiva] = useState('Sobre');

  function mudarAba(aba) {
    setAbaAtiva(aba);
  }

  return (
    <div className="abas-container">
      <div className="abas-navegacao">
        <button 
          className={`aba-botao ${abaAtiva === 'Sobre' ? 'ativa' : ''}`} 
          onClick={() => mudarAba('Sobre')}
        >
          Sobre
        </button>
        <button 
          className={`aba-botao ${abaAtiva === 'Contato' ? 'ativa' : ''}`} 
          onClick={() => mudarAba('Contato')}
        >
          Contato
        </button>
      </div>

      <div className="conteudo-aba">
        {abaAtiva === 'Sobre' && (
          <div>
            <h2 style={{color:'#7b5791', fontWeight:'700'}}>Sobre</h2>
            <p>Bem-vindo!</p>
            <p>Somos uma empresa de sustentabilidade e inovação! </p>
          </div>
        )}

        {abaAtiva === 'Contato' && (
          <div>
            <h2 style={{color:'#7b5791', fontWeight:'700'}}>Contato</h2>
            <p>Entre em contato conosco pelo email: empresaficticia@gmail.com.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Abas;
