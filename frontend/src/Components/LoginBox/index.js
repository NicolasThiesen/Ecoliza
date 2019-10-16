import React, { useState, useEffect } from 'react'
import {VisibilityOutlinedIcon,VisibilityOffOutlinedIcon} from '@material-ui/icons/VisibilityOutlined';
import './style.css'
import { async } from 'q';

export default function LoginBox() {

  return (
    <div className="box">
      <div className="header">
        <h2>Entrar</h2>
      </div>
      <form>
        <label for="input-user">Login</label>
        <input type="text" id="input-nome" required autoFocus></input>
        <label for="input-pass">Senha</label>
        <input type="password" id="input-pass" required></input>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}


