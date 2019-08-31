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

    codigoInput(e) {
        this.setState({ ...this.state, codigo: e.target.value })
    }
    descricaoInput(e) {
        this.setState({ ...this.state, descricao: e.target.value })
    }
    cargaInput(e) {
        this.setState({ ...this.state, cargaHoraria: e.target.value })
    }
    precoInput(e) {
        this.setState({ ...this.state, preco: e.target.value })
    }
    categoriaInput(e) {
        this.setState({ ...this.state, categoria: e.target.value })
    }

    getLista(){
        axios.get(URL).then(response => {
            this.setState({ ...this.state, cursos : response.data})
        })
    }

    adicionaCurso(e){
        e.preventDefault();

        const {_id, codigo, descricao, cargaHoraria, preco, categoria} = this.state;

        if((!codigo || codigo === 0)
            || (!descricao || descricao === '')
            || (!cargaHoraria || cargaHoraria === 0)
            || (!preco || preco === 0)
            || (!categoria || categoria === '')){
                alert('Campos obrigatórios não preenchidos!')
                return;
        }

        if(!_id || _id === ''){
            axios.post(URL, { codigo, descricao, cargaHoraria, preco, categoria})
            .then(_ => {
                alert("Curso adicionado");
                this.limpaForm();
                this.getLista();
            })
            .catch(_ => alert("Não foi possível cadastrar curso."));
        }else{
            axios.put(URL+_id, { codigo, descricao, cargaHoraria, preco, categoria})
            .then(_ => {
                alert("Curso atualizado");
                this.limpaForm();
                this.getLista();
            })
            .catch(_ => alert("Não foi possível atualizar o curso."));
        }

    }

    limpaForm(){
        console.log(this.initialState)
        this.setState(this.initialState);
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
                <div className="col-md-5">
                    <Form
                        codigo={this.state.codigo}
                        descricao={this.state.descricao}
                        cargaHoraria={this.state.cargaHoraria}
                        preco={this.state.preco}
                        categoria = {this.state.categoria}
                        _id = {this.state._id}
                        
                        cargaHorariaInput={this.cargaInput.bind(this)}
                        codigoInput={this.codigoInput.bind(this)}
                        descricaoInput={this.descricaoInput.bind(this)}
                        precoInput={this.precoInput.bind(this)}
                        categoriaInput={this.categoriaInput.bind(this)}
                        
                        adicionarCurso={this.adicionaCurso.bind(this)}
                        >
                        
                    </Form>

                    
                </div>
                <div className="col-md-7">
                    <List cursos={this.state.cursos} 
                        deletaCurso={this.deletaCurso.bind(this)}
                        selecionaCurso={this.selecionaCurso.bind(this)}></List>
                </div>
            </div> 
        )
    }
}