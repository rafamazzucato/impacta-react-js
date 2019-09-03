import React from 'react'

import Cabecalho from '../../components/cabecalho'
import ContatoCadastro from './cadastro'

export default class Compromisso extends React.Component {

    render(){
        return (
            <div className="container">
                <Cabecalho titulo="Contato"
                    subtitulo=" entre em contato conosco"></Cabecalho>
                <ContatoCadastro/>
            </div>
        )
    }
}