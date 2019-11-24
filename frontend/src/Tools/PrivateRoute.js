import React from "react";
import { isAuthenticated } from "./Autenticacion"; 
import { Route,Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props}/>
        ):(
            <Redirect to={{ pathname:"/adm", state:{from:props.location}}}/>
        )
    )}></Route>
)
export default PrivateRoute;