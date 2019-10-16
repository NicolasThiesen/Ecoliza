import React from "react"; 

import { isAuthenticated } from "./Autenticacion"; 

import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

// Pages
import { Cadastro, Lugares, Home, LoginAdm } from 'Pages'

const PrivateRoute = ({component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props}/>
        ):(
            <Redirect to={{ pathname:"/adm", state:{from:props.location}}}/>
        )
    )}></Route>
)

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <PrivateRoute path="/cadastro" component={Cadastro}></PrivateRoute>
        <Route path="/lugares" component={Lugares}></Route>
        <Route path="/adm" component={LoginAdm}></Route>
      </Switch>
    </BrowserRouter>
)
export default Routes;