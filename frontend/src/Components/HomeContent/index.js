import "./style.css"
import React from 'react';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="content">
      <div className="row">
        <h2>
          Plante o<br></br>Melhor para<br></br>o Amanhã
        </h2>
        <Link to="/map">
          <button>Comece a Reciclar</button>
        </Link>
      </div>
    </div>
  );
}
