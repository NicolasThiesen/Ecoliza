import React, { useEffect, useState } from 'react'
import api from 'services/api'

import './style.css'

export const Lugares = props => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/ponto/all')
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <h2>Lista de Lugares Cadastrados</h2>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Endereço</th>
              <th scope="col">Descrição</th>
              <th scope="col">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {data.map(ponto => (
              <tr key={ponto._id}>
                <th scope="row">{ponto.name}</th>
                <td>{ponto.adress}</td>
                <td>{ponto.description}</td>
                <td>{ponto.trash_type.join(', ')}.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Lugares
