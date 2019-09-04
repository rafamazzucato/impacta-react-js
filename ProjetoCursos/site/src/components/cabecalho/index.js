import React from 'react'

import { connect } from "react-redux";

class Cabecalho extends React.Component{

    render(){
        const {titulo, subtitulo} = this.props;

        return (
            <header className="pb-2 mt-4 mb-2 border-bottom">
                <h2><strong>{titulo}</strong> - 
                <small>{subtitulo} {this.props.codigo}</small></h2>
            </header>
        )
    }
}

//padrão decorator
const mapStateToProps = state => ({
    codigo: state.curso.codigo,
});

export default connect(mapStateToProps)(Cabecalho);