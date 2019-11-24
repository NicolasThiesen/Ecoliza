import React from "react"; 

import history from "../Tools/history"

import { Switch, Route, Router } from 'react-router-dom'
import { Header } from 'Components'
// Pages
import { Cadastro, Lugares, Home, LoginAdm, MapPage } from 'Pages'

import PrivateRoute from "../Tools/PrivateRoute";

const Routes = () => (

    <Router history={history}>
        <Header></Header>
      <Switch >
        <Route path="/" exact component={Home}></Route>
        <PrivateRoute path="/cadastro" component={Cadastro}></PrivateRoute>
        <Route path="/lugares" component={Lugares}></Route>
        <Route path="/adm" component={LoginAdm}></Route>
        <Route path="/map" component={MapPage}></Route>
      </Switch>
    </Router>
)
export default Routes;