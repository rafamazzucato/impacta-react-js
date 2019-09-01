import React from 'react'

import Cabecalho from '../../components/cabecalho'
import CompromissoCadastro from './cadastro'

export default class Compromisso extends React.Component {

    render(){
        return (
            <div className="container">
                <Cabecalho titulo="Cursos"
                    subtitulo=" gerenciamento da plataforma de cursos"></Cabecalho>
                <CompromissoCadastro/>
            </div>
        )
    }
}