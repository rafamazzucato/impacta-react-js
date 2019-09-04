import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
    codigoInput,
    descricaoInput,
    cargaHorariaInput,
    precoInput,
    categoriaInput,
    adicionarCursoOld,
    atualizarCursoOld,
    listaCursos
} from '../../actions/cursoActions';

class CursoForm extends React.Component {

    constructor(props){
        super(props)
        this.salvaAtualizaCurso = this.salvaAtualizaCurso.bind(this);
    }

    salvaAtualizaCurso = (e) =>{
        e.preventDefault();

        const {adicionarCursoOld, 
            atualizarCursoOld, 
            _id, 
            codigo, 
            descricao, 
            cargaHoraria, 
            preco, 
            categoria
        } = this.props;

        if((!codigo || codigo === 0)
            || (!descricao || descricao === '')
            || (!cargaHoraria || cargaHoraria === 0)
            || (!preco || preco === 0)
            || (!categoria || categoria === '')){
                alert('Campos obrigatórios não preenchidos!')
                return;
        }

        if(!_id || _id === ''){
            adicionarCursoOld(codigo, descricao, cargaHoraria, preco, categoria)
            alert('Curso adicionado com sucesso');
        }else{
            atualizarCursoOld(_id, codigo, descricao, cargaHoraria, preco, categoria)
            alert('Curso atualizado com sucesso');
        }

        window.location.reload()
    }

    render(){

        const {codigo, descricao, cargaHoraria, preco, categoria, codigoInput, descricaoInput, cargaHorariaInput, precoInput, categoriaInput} = this.props;
        const props =this.props;

        return (
        <div className="border-right pl-3 pr-3">
        <h3 className="border-bottom">Formulário</h3>
        <form>
            <div className="form-group row">
                <label htmlFor="codigo"
                    className="col-sm-3 col-form-label">
                    Código:
		    </label>
                <div className="col-sm-9">
                <input type="number"
                            className="form-control" id="codigo" value={codigo} onChange={codigoInput} />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="descricao"
                    className="col-sm-3 col-form-label">
                    Descrição:
		    </label>
                <div className="col-sm-9">
                    <input type="text"
                            className="form-control" id="descricao" value={descricao} onChange={descricaoInput} />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="cargaHoraria"
                    className="col-sm-3 col-form-label">
                    Carga Horária:
		    </label>
                <div className="col-sm-9">
                <input type="number"
                            className="form-control" id="cargaHoraria" value={cargaHoraria} onChange={cargaHorariaInput} />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="preco"
                    className="col-sm-3 col-form-label">
                    Preço:
		    </label>
                <div className="col-sm-9">
                <input type="number" className="form-control" id="preco" value={preco} onChange={precoInput} />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="categoria" className="col-sm-3 col-form-label">Categoria:</label>
                <div className="col-sm-9">
                    <select className="form-control" id="categoria"
                        onChange={categoriaInput}
                        value={categoria}>

                        <option>INFORMATICA</option>
                        <option>ENGENHARIA</option>
                        <option>ADMINISTRACAO</option>
                        <option>REDES</option>
                    </select>
                </div>
            </div>


            <div className="form-group row">
                <button
                        className="btn btn-primary ml-3 mb-3" onClick={this.salvaAtualizaCurso}>
                    { !props._id || props._id === '' ? 'Adicionar' : 'Atualizar' }
			</button>
            </div>

        </form>

        </div>)
    }
}

//padrão decorator
const mapStateToProps = state => ({
    _id: state.curso._id,
    codigo: state.curso.codigo,
    descricao: state.curso.descricao,
    cargaHoraria: state.curso.cargaHoraria,
    preco: state.curso.preco,
    categoria : state.curso.categoria
});

const mapDispatchToProps = dispatch => bindActionCreators({
    codigoInput,
    descricaoInput,
    cargaHorariaInput,
    precoInput,
    categoriaInput,
    adicionarCursoOld,
    atualizarCursoOld,
    listaCursos
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CursoForm);