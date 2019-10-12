import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Lugares from './pages/Lugares';
import Home from './pages/Home';
function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/cadastro" component={Cadastro}></Route>
            <Route path="/lugares" component={Lugares}></Route>
        </Switch>
    );
}
export default Routes;