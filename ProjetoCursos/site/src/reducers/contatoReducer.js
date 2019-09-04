const INITIAL_STATE = {
    data: '2019-09-03',
    nome: '',
    email: '',
    assunto: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DATA_INPUT': return { ...state, data: action.info }
        case 'NOME_INPUT': return { ...state, nome: action.info }
        case 'EMAIL_INPUT': return { ...state, email: action.info }
        case 'ASSUNTO_INPUT': return { ...state, assunto: action.info }
        case 'ADICIONAR_CONTATO': return INITIAL_STATE
         
        default: return state;
    }
}