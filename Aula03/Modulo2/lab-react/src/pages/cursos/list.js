import React from 'react'

export default class CursoList extends React.Component {

    exibirLinhas(){
        if(this.props && this.props.cursos && this.props.cursos.length > 0){
            const {cursos} = this.props;

            return cursos.map(curso => (
                <tr key={'curso-list-'+curso._id}>
                    <td>{curso.codigo}</td>
                    <td>{curso.descricao}</td>
                    <td>{curso.cargaHoraria}</td>
                    <td>{curso.preco}</td>
                    <td>{curso.categoria}</td>
                    <td className="row">
                        <button className="btn btn-success" onClick={() => this.props.selecionaCurso(curso)}>
                            <i className="fa fa-check"></i>
                        </button>
                         
                        <button className="btn btn-danger" onClick={() => this.props.deletaCurso(curso._id)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            ));
        }
    }

    render(){
        return (
            <div>
                <h3>Lista de Cursos</h3>
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