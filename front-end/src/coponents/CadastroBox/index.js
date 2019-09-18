import React from 'react';

import  './style.css';

export default function CadastroBox() {
  return (
    <div className="box">
        <div className="header">
                <h2>Cadastro de Ponto de Coleta</h2>
            </div>
            <form>
                <label for='input-nome'>Nome do Local</label>
                <input type="text"  id="input-nome" required autoFocus></input>
                <label for='input-endereco'>Endereço</label>
                <input type="text" id="input-endereco" required ></input>
                <label for='input-numero'>Número</label>
                <input type="tel" id="input-numero" required max="99999" min="100"></input>
                <label for='input-complemeto'>Complemeto</label>
                <input type="password" id="input-complemeto" required ></input>
                <label for='input-imagem' className="labelimg">Imagem do local</label>
                <input type="file" id="input-imagem" required ></input>
                <label>Tipo de lixo reciclado:</label><br/>
                <select>
                  <option value="Orgânico">Orgânico</option>
                  <option value="Vidro">Vidro</option>
                  <option value="Plástico">Plantico</option>
                  <option value="Metais">Metais</option>
                  <option value="Pilha">Pilha</option>
                </select>
                <button type="submit">Cadastrar</button>
                
            </form>

    </div>
  );
}
