import React, {useState} from "react";

function ListaTarefas () {
	const [tarefas, setTarefas] = useState([]);
	const [novaTarefa, setNovaTarefa] = useState ('');
	const [filtro, setFiltro] = useState ('todas');

	const addTarefa = () => {
		if (novaTarefa.trim()) {
			setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa, concluída: false}]);
			setNovaTarefa('');
		}
	}

	const removerTarefa = id => setTarefas(tarefas.filter(tarefa => tarefa.id !== id));

	const concluirTarefa = id => {
		setTarefas(tarefas.map(tarefa => tarefa.id === id ? {...tarefa, concluida: !tarefa.concluida} : tarefa));
	};

	const tarefasFiltradas = filtro === "pendentes" ? tarefas.filter(tarefa => !tarefa.concluida) : tarefas;

	return (
		<div>
			<h1>suas tarefas</h1>
			<div className="add-tarefa">
				<input type="text" value={novaTarefa}
          		onChange={e => setNovaTarefa(e.target.value)}
          		placeholder="nova tarefa" />
				<button onClick={addTarefa}>adicionar</button>
			</div>
			<div>
				<button onClick={() => setFiltro('todas')}>todas as tarefas</button>
				<button onClick={() => setFiltro('pendentes')}>pendentes</button>
			</div>

		<ul className="lista-tarefas">
        {tarefasFiltradas.map(tarefa => (
          <li key={tarefa.id} className="tarefa-item">
            <span
              onClick={() => concluirTarefa(tarefa.id)}
              className={tarefa.concluida ? 'concluida' : ''}
            >
              {tarefa.texto}
            </span>
            <button onClick={() => concluirTarefa(tarefa.id)}>
              {tarefa.concluida ? 'desfazer' : 'concluir'}
            </button>
            <button onClick={() => removerTarefa(tarefa.id)}>remover</button>
          </li>
        ))}
      </ul>
  </div>
	)
}

export default ListaTarefas