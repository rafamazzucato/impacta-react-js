import React from 'react'

export default class Cabecalho extends React.Component{

    render(){
        const {titulo, subtitulo} = this.props;

        return (
            <header className="pb-2 mt-4 mb-2 border-bottom">
                <h2><strong>{titulo}</strong> - 
                <small>{subtitulo}</small></h2>
            </header>
        )
    }
}