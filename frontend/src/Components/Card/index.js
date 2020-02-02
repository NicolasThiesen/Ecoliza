import React from 'react'
import './style.css'

export default function Card({img,title,text}) {
  return (
    <div className="card">
        <div className="img-content">
            <img src={img} alt="icon"></img>
        </div>
        <h2 className="title">
            {title}
        </h2>
        <p>
            {text}
        </p>
    </div>
  )
}
