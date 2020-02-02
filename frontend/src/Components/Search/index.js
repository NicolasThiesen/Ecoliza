import React, { useState } from 'react'
import api from '../../services/api'
import './styles.css'

export default function Search(props) {
  const [focus, setFocus] = useState(false)
  const [currentValue, setCurrentValue] = useState("")
  const [names, setNames] = useState([])

  const handleClick = data => {
    setCurrentValue(data.name)
    props.data(data) 
  }

  const handleChange = async event => {
    const name = event.target.value
    setCurrentValue(name)
    if (name !== '') {
      const res = await api.get(`/ponto/nome/${name}`)
      setNames(res.data)
    }else{
      setNames([""])
    }
  }

  return (
    <>
    <div className="search">
        {/* Input para pesquisa de um ponto pelo nome */}
        <input placeholder="Digite um Ponto de Coleta" onChange={handleChange} onFocus={()=>{setFocus(true)}} onBlur={()=>{setTimeout(()=>{setFocus(!focus)},200)}} value={currentValue}></input>
        {/* Botões para pesquisa de pontos pelo tipo de reciclagem */}
        {focus === true && (
            <div className="dropdown"> 
                {names.map(suggestion =>{
                return (
                    <div key={suggestion._id}>
                        <span onClick={()=>{handleClick(suggestion)}}>{suggestion.name}</span>
                    </div>
                    )
                 })}
                <div className="filter">
                   bla
                </div>
            </div>
        )}
    </div>
    </>
  )
}
