import React from 'react'
import Form from './form'
import List from './list'
import axios from 'axios';

const URL = 'http://localhost:3200/ws/cursos/'

export default class CursoCadastro extends React.Component {

    initialState = {
        _id : '',
        codigo: 0, 
        descricao: '', 
        cargaHoraria: 0, 
        preco: 0.0,
        categoria: 'INFORMATICA',
        cursos : []
    }

    constructor(props){
        super(props)
        this.state = this.initialState;
    }
    componentWillMount(){
        this.getLista();
    }

    getLista(){
        axios.get(URL).then(response => {
            this.setState({ ...this.state, cursos : response.data})
        })
    }

    deletaCurso(id){
        if(!id || id === ''){
            alert("Favor, selecionar o curso a ser deletado");
            return
        }

        if(window.confirm('Deseja deletar o curso selecionado?')){
            axios.delete(URL+id).then(_ =>{
                alert("Curso deletado com sucesso.");
                this.getLista();
            }).catch(error =>{
                console.log(error);
                alert("Não foi possível deletar o curso selecionado.")
            })
        }   
    }

    selecionaCurso(curso){
        this.setState({...this.state, 
            _id : curso._id,
            codigo: curso.codigo, 
            cargaHoraria: curso.cargaHoraria, 
            descricao: curso.descricao, 
            categoria: curso.categoria, 
            preco: curso.preco
        })
    }

    render(){
        return (
            <div className="row border-bottom ">
                <div className="col-md-4">
                    <Form></Form>
                </div>
                <div className="col-md-8">
                    <List cursos={this.state.cursos} 
                        deletaCurso={this.deletaCurso.bind(this)}
                        selecionaCurso={this.selecionaCurso.bind(this)}></List>
                </div>
            </div> 
        )
    }
}