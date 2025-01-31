import React, { useState } from 'react';
import howl from './imagens/howl.jpg';
import jiji from './imagens/jiji.jpeg';
import totoro from './imagens/totoro.jpeg';
import '../index.css'

function Galeria() {
  const imagens = [howl, jiji, totoro];
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [indiceAtual, setIndiceAtual] = useState(null);

  const abrirModal = (indice) => {
    setImagemSelecionada(imagens[indice]);
    setIndiceAtual(indice);
  };

  const fecharModal = () => {
    setImagemSelecionada(null);
    setIndiceAtual(null);
  };

  const navegarAnterior = () => {
    const novoIndice = (indiceAtual - 1 + imagens.length) % imagens.length;
    setImagemSelecionada(imagens[novoIndice]);
    setIndiceAtual(novoIndice);
  };

  const navegarProximo = () => {
    const novoIndice = (indiceAtual + 1) % imagens.length;
    setImagemSelecionada(imagens[novoIndice]);
    setIndiceAtual(novoIndice);
  };

  return (
    <div className="galeria-container">
      <h1>personagens studios ghibli!</h1>
      <div className="galeria-imagens">
        {imagens.map((imagem, indice) => (
          <img
            key={indice}
            src={imagem}
            alt={`Imagem ${indice + 1}`}
            className="imagem-item"
            onClick={() => abrirModal(indice)}
          />
        ))}
      </div>

      {imagemSelecionada && (
        <div className="modal">
          <div className="modal-conteudo">
            <button className="botao-fechar" onClick={fecharModal}>X</button>
            <img src={imagemSelecionada} alt="visualização ampliada" className="imagem-ampliada" />
            <div className="navegacao-botoes">
              <button onClick={navegarAnterior}>anterior</button>
              <button onClick={navegarProximo}>próximo</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Galeria;
