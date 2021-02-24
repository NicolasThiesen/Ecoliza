import React, { useState } from 'react'
import api from '../../services/api'
import './styles.css'
import { set } from 'immutable'

export default function Search(props) {
  const [clickFilter,setClickFilter] = useState(true)
  const [focus, setFocus] = useState(false)
  const [currentValue, setCurrentValue] = useState("")
  const [names, setNames] = useState([])
  const [searchInpStyle,setSearchInpStyle] = useState({})

  const handleFocus = () => {
    console.log(clickFilter);
    
    if(clickFilter === false){
      setSearchInpStyle({
        width: "270px",
      })
      setFocus(!focus)
    }else{
      setFocus(true)
      setSearchInpStyle({width:"100%"})
    }
    
  }

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
        <input style={searchInpStyle} placeholder="Digite um Ponto de Coleta" onChange={handleChange} onFocus={()=>{setTimeout(()=>{setFocus(!focus)},350)}} onBlur={()=>{setTimeout(()=>{handleFocus()},150)}} value={currentValue}></input>
        {/* Botões para pesquisa de pontos pelo tipo de reciclagem */}
        {focus === true && (
            <>
              <div className="dropdown"> 
                  {names.map(suggestion =>{
                  return (
                      <div key={suggestion._id}>
                          <span onClick={()=>{handleClick(suggestion)}}>{suggestion.name}</span>
                      </div>
                      )
                  })}
              </div>
            <div className="filter" onClick={()=>{setClickFilter(true);console.log(clickFilter)}} onMouseLeave={()=>{setClickFilter(!clickFilter);console.log(clickFilter);setTimeout(()=>{handleFocus()},150)}}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div> 
            </div>
          </>
        )}
        
    </div>
    </>
  )
}
