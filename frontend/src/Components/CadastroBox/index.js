import React from 'react'
import InputAuto from "../InputAucomplete"
import './style.css'

export default function CadastroBox() {

  return (
    <div className="box">
      <div className="header">
        <h2>Cadastro de Ponto de Coleta</h2>
      </div>
      <form>
        <label>Endereço</label>
        <InputAuto/>
        <label for="input-nome">Nome do Local</label>
        <input type="text" id="input-nome" required autoFocus></input>
        <label>Tipo de lixo reciclado:</label>
        <br />
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
  )
}
