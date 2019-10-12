import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { Cadastro, Lugares, Home } from 'Pages'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/cadastro" component={Cadastro}></Route>
        <Route path="/lugares" component={Lugares}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
