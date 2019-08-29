import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import Compromisso from '../Compromisso/Compromisso';

export default class Rotas extends React.Component{
    render(){
        return (
            <Switch>
            {/* <Route path='/Compromisso' component={Compromisso} />
            <Route path='*' component={Compromisso} /> */}
            </Switch>
        )
    }
}