import React from 'react'

export default class CursoForm extends React.Component {

    render(){
        const props = this.props;

        return (
        <div className="border-right pl-3 pr-3">
        <h3 className="border-bottom">Formulario</h3>
        <form>
            <div className="form-group row">
                <label htmlFor="data"
                    className="col-sm-3 col-form-label">
                    Data:
		    </label>
                <div className="col-sm-5 col-6">
                    <input type="date"
                        className="form-control" id="data" value={props.data} onChange={props.dataInput} />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="descricao"
                    className="col-sm-3 col-form-label">
                    Descrição:
		    </label>
                <div className="col-sm-9">
                    <input type="text"
                            className="form-control" id="descricao" value={props.descricao} onChange={props.descricaoInput} />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="responsavel"
                    className="col-sm-3 col-form-label">
                    Responsável:</label>
                <div className="col-sm-5 col-6">
                    <input type="text"
                            className="form-control" id="responsavel" value={props.responsavel} onChange={props.responsavelInput} />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="telefone"
                    className="col-sm-3 col-form-label">
                    Telefone:</label>
                <div className="col-sm-5 col-6">
                    <input type="text"
                            className="form-control" id="telefone" value={props.telefone} onChange={props.telefoneInput} />
                </div>
            </div>


            <div className="form-group row">
                <button
                        className="btn btn-primary ml-3 mb-3" onClick={props.adicionarCompromisso}>
                    Adicionar
			</button>
            </div>

        </form>

        </div>)
    }
}