import React, { useState } from 'react'
import api from '../../services/api'
import './styles.css'

export default function Search() {
  const [focus, setFocus] = useState(false)
  const [data, setData] = useState([])
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
      <input
        placeholder="Digite o Ponto"
        onChange={handleChange}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => {
          setFocus(!focus)
        }}
      ></input>

      {focus && (
        <div className="dropdown">
          {names.map(suggestion => {
            return (
              <div key={suggestion._id}>
                <span
                  onClick={() => {
                    handleClick(suggestion)
                  }}
                >
                  {suggestion.name}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
