const INITIAL_STATE = {
    _id : '',
    codigo: 0, 
    descricao: '', 
    cargaHoraria: 0, 
    preco: 0.0,
    categoria: 'INFORMATICA',
    list : []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CODIGO_INPUT': return { ...state, codigo: action.info }
        case 'DESCRICAO_INPUT': return { ...state, descricao: action.info }        
        case 'CARGA_INPUT': return { ...state, cargaHoraria: action.info }
        case 'PRECO_INPUT': return { ...state, preco: action.info }
        case 'CATEGORIA_INPUT': return { ...state, categoria: action.info }
        case 'ADICIONAR_CURSO': return INITIAL_STATE
        case 'SELECIONAR_CURSO' : return { ...state, 
                _id: action.info._id,
                codigo: action.info.codigo,
                descricao : action.info.descricao,
                cargaHoraria : action.info.cargaHoraria,
                preco : action.info.preco,
                categoria : action.info.categoria,
        }
        case 'LISTA_CURSOS' : return {...state, list: action.info}
        
        default: return state;
    }
}