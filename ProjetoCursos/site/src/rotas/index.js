import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Cursos from '../pages/cursos';
import Contato from '../pages/contato';

export default class Rotas extends React.Component{
    render(){
        return (
            <Switch>
                <Route path='/cursos' component={Cursos} />
                <Route path='/contato' component={Contato} />
                <Route path='*' component={Cursos} />
            </Switch>
        )
    }
}