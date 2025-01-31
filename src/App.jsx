import React, { useState } from 'react';
import Galeria from './componentes/Galeria';
import Contador from './componentes/Contador';
import MudarBackground from './componentes/MudarBackground';
import ListaTarefas from './componentes/ListaTarefas';
import Timer from './componentes/Timer';
import FiltroLista from './componentes/FiltroLista';
import FormularioRegistro from './componentes/FormularioRegistro';
import RequisicaoDados from './componentes/RequisicaoDados';
import Temporizador from './componentes/Temporizador';
import Abas from './componentes/Abas';

function App() {
  const [desafioAtivo, setDesafioAtivo] = useState(null);

  const renderizarDesafio = () => {
    switch (desafioAtivo) {
      case 1:
        return <Contador />;
      case 2:
        return <MudarBackground />;
      case 3:
        return <ListaTarefas />;
      case 4:
        return <Temporizador />;
      case 5:
        return <FiltroLista />;
      case 6:
        return <FormularioRegistro />;
      case 7:
        return <RequisicaoDados />;
      case 8:
        return <Galeria />;
      case 9:
        return <Timer />;
      case 10:
        return < Abas/>;
    }
  };

  return (
    <div className="app-container">
      <h1 id='titulo-app'>atividade 7</h1>
      <div className="botoes-container">
        {[...Array(10)].map((_, index) => (
          <button
            key={index}
            onClick={() => setDesafioAtivo(index + 1)}
            className="botao-desafio">
            tarefa {index + 1}
          </button>
        ))}
      </div>
      <div className="conteudo-desafio">{renderizarDesafio()}</div>
    </div>
  );
}

export default App;
