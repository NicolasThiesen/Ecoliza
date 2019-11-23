import React from 'react'

import history from '../Tools/history'
import { Switch, Route, Router } from 'react-router-dom'
import { Header } from 'Components'
import { Cadastro, Lugares, Home, LoginAdm } from 'Pages'
import PrivateRoute from './PrivateRoute'
import './App.css'

const App = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <PrivateRoute path="/cadastro" component={Cadastro}></PrivateRoute>
      <Route path="/lugares" component={Lugares}></Route>
      <Route path="/adm" component={LoginAdm}></Route>
    </Switch>
  </Router>
)

export default App
