const INITIAL_STATE = {
    _id : '',
    codigo: 0, 
    descricao: '', 
    cargaHoraria: 0, 
    preco: 0.0,
    categoria: 'INFORMATICA',
    cursos : []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CODIGO_INPUT': return { ...state, codigo: action.info }
        case 'DESCRICAO_INPUT': return { ...state, descricao: action.info }        
        case 'CARGA_INPUT': return { ...state, cargaHoraria: action.info }
        case 'PRECO_INPUT': return { ...state, preco: action.info }
        case 'CATEGORIA_INPUT': return { ...state, categoria: action.info }
        case 'ADICIONAR_CURSO': return {INITIAL_STATE}
        
        default: return state;
    }
}