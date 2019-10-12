import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
 
 
export default function Header() {
  return (
      <div className="main-header">
        <Link to="/">
          <h1>Ecoliza</h1>
        </Link>
        <div className="buttons">
          <Link to="/cadastro">
            <button>Novo Ponto de Coleta</button>
          </Link>
          <Link to="/lugares">
            <a href="/lugares">Pontos de Coleta</a>
          </Link>
        </div>
      </div>
  );
}
 

