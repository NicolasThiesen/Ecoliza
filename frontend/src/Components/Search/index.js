import React, { useState } from 'react'
import api from '../../services/api'
import './styles.css'

export default function Search() {
  const [focus, setFocus] = useState(false)
  const [names, setNames] = useState([])

  const handleClick = event => {
    console.log('clicked_data')
  }

  const handleChange = async event => {
    const name = event.target.value
    if (name !== '') {
      const res = await api.get(`/ponto/nome/${name}`)
      setNames(res.data)
    }
  }

  return (
    <div className="search">
        {/* Input para pesquisa de um ponto pelo nome */}
        <input placeholder="Digite um Ponto de Coleta" onChange={handleChange} onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(!focus)}}></input>
        {/* Botões para pesquisa de pontos pelo tipo de reciclagem */}
        {true && (
            <div className="dropdown"> 
                {names.map(suggestion =>{
                return (
                    <div key={suggestion._id}>
                        <span onClick={()=>{handleClick(suggestion)}}>{suggestion.name}</span>
                    </div>
                    )
                 })}
            </div>
        )}
    </div>
  )
}
