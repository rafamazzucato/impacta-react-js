import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
    selecionaCurso,
    excluirCurso,
    listaCursos
} from '../../actions/cursoActions';

class CursoList extends React.Component {

    constructor(props){
        super(props)
        this.deletar = this.deletar.bind(this)
    }

    componentWillMount(){
        this.props.listaCursos(false, '');
    }

    deletar(id){
        if(!id || id === ''){
            alert("Favor, selecionar o curso a ser deletado");
            return
        }

        if(window.confirm('Deseja deletar o curso selecionado?')){
            this.props.excluirCurso(id)
        }   
    }

    exibirLinhas(){
        if(this.props && this.props.cursos && this.props.cursos.length > 0){
            const {cursos, selecionaCurso} = this.props;

            return cursos.map(curso => (
                <tr key={'curso-list-'+curso._id}>
                    <td>{curso.codigo}</td>
                    <td>{curso.descricao}</td>
                    <td>{curso.cargaHoraria}</td>
                    <td>{curso.preco}</td>
                    <td>{curso.categoria}</td>
                    <td className="row">
                        <button className="btn btn-success" onClick={() => selecionaCurso(curso)}>
                            <i className="fa fa-check"></i>
                        </button>
                         &nbsp;
                        <button className="btn btn-danger" onClick={() => this.deletar(curso._id)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            ));
        }
    }

    render(){

        if(this.props.msg && this.props.msg !== ''){
            alert(this.props.msg)
        }

        return (
            <div>
                <h3>Lista</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Carga Horária</th>
                            <th>Preço</th>
                            <th>Categoria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exibirLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }
}

//padrão decorator
const mapStateToProps = state => ({
    cursos: state.curso.list,
    msg : state.curso.alertDelete
});

const mapDispatchToProps = dispatch => bindActionCreators({
    selecionaCurso,
    excluirCurso,
    listaCursos
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CursoList);