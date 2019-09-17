import React from 'react';

import  './style.css';

export default function CadastroBox() {
  return (
    <div className="box">
        <div className="header">
                <h2>Cadastro de Ponto de Coleta</h2>
            </div>
            <form>
                <label for='input-nome'>Nome</label>
                <input type="text"  id="input-nome" required autoFocus></input>
                <label for='input-email'>E-mail</label>
                <input type="e-mail" id="input-email" required ></input>
                <label for='input-senha'>Senha</label>
                <input type="password" id="input-senha" required ></input>
                <label for='input-rsenha'>Repita a senha</label>
                <input type="e-mail" id="input-rsenha" required ></input>
                <button type="submit">Cadastrar</button>
            </form>

    </div>
  );
}
