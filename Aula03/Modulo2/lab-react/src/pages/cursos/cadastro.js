import React from 'react'
import Form from './form'
import List from './list'
import axios from 'axios';

const URL = 'http://localhost:3200/ws/cursos/'

export default class CursoCadastro extends React.Component {

    initialState = {data: '', 
        descricao: '', 
        responsavel: '', 
        telefone: '',
        cursos : []
    }

    constructor(props){
        super(props)
        this.state = this.initialState;
    }
    componentWillMount(){
        this.getLista();
    }

    dataInput(e) {
        this.setState({ ...this.state, data: e.target.value })
    }
    descricaoInput(e) {
        this.setState({ ...this.state, descricao: e.target.value })
    }
    responsavelInput(e) {
        this.setState({ ...this.state, responsavel: e.target.value })
    }
    telefoneInput(e) {
        this.setState({ ...this.state, telefone: e.target.value })
    }

    getLista(){
        axios.get(URL).then(response => {
            this.setState({ ...this.state, cursos : response.data})
        })
    }

    render(){
        return (
            <div className="row border-bottom ">
                <div className="col-md-5">
                    <Form
                        data={this.state.data}
                        descricao={this.state.descricao}
                        responsavel={this.state.responsavel}
                        telefone={this.state.telefone}
                        
                        responsavelInput={this.responsavelInput.bind(this)}
                        dataInput={this.dataInput.bind(this)}
                        descricaoInput={this.descricaoInput.bind(this)}
                        telefoneInput={this.telefoneInput.bind(this)}
                        
                        // adicionarCurso={this.adicionarCurso}
                        >
                        
                    </Form>

                    
                </div>
                <div className="col-md-7">
                    <List cursos={this.state.cursos}></List>
                    {/* <CompromissoList cursos={this.state.Compromissos} /> */}
                </div>
            </div> 
        )
    }
}