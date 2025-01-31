import React, { useState } from 'react';

function FormularioRegistro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemBoasVindas, setMensagemBoasVindas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !senha) {
      alert('por favor, preencha todos os campos!!!');
      return;
    }

    setMensagemBoasVindas(`seja bem-vindo(a), ${nome}! o seu e-mail é ${email}.`);
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <div className='formulario'>
      {mensagemBoasVindas ? (
        <h2 style={{fontSize:'1rem'}}>{mensagemBoasVindas}</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">e-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="senha">senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <button type="submit">registrar</button>
        </form>
      )}
    </div>
  );
}

export default FormularioRegistro;
