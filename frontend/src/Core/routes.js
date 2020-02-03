import React from "react" 

import history from "../Tools/history"

import { Switch, Route, Router } from 'react-router-dom'
import { Header } from 'Components'
// Pages
import { Cadastro, Lugares, Home, LoginAdm, MapPage } from 'Pages'

import PrivateRoute from "../Tools/PrivateRoute"
class Routes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dark: false
    }
  }
  
  render() {
    return (
    <Router history={history}>
        <Header darkStyle={this.setState.bind(this)}></Header>
      <Switch >
        <Route path="/" exact component={Home}></Route>
        <PrivateRoute path="/cadastro" component={Cadastro}></PrivateRoute>
        <Route path="/lugares" component={Lugares}></Route>
        <Route path="/adm" component={LoginAdm}></Route>
        <Route path="/map" ><MapPage darkStyle={this.state.dark}></MapPage></Route>
      </Switch>
    </Router>
    )
}
}
export default Routes