import axios from 'axios';
const URL = 'http://localhost:3200/ws/cursos/'

export const codigoInput = e => ({
    type: 'CODIGO_INPUT',
    info: e.target.value
});

export const descricaoInput = e => ({
    type: 'DESCRICAO_INPUT',
    info: e.target.value
});

export const cargaHorariaInput = e => ({
    type: 'CARGA_INPUT',
    info: e.target.value
});

export const precoInput = e => ({
    type: 'PRECO_INPUT',
    info: e.target.value
});

export const categoriaInput = e => ({
    type: 'CATEGORIA_INPUT',
    info: e.target.value
});

export const adicionarCurso = (codigo, descricao, cargaHoraria, preco, categoria) => {
    return (dispatch) => {
        return axios.post(URL, { codigo, descricao, cargaHoraria, preco, categoria}).then(() =>{
            dispatch(listaCursos(true))
            dispatch({
                type : 'DISPARA_ALERTA_INCLUIRALTERAR',
                info: 'Curso criado com sucesso'
            })
        }).catch((err) => {
            console.log(err);
            dispatch({
                type : 'DISPARA_ALERTA_INCLUIRALTERAR',
                info: 'Ocorreu erro ao criar curso'
            })
        })
    }
};

export const atualizarCurso = (_id, codigo, descricao, cargaHoraria, preco, categoria) => {
    return (dispatch) => {
        return axios.put(URL+_id, { codigo, descricao, cargaHoraria, preco, categoria}).then(() =>{
            dispatch(listaCursos(true))
            dispatch({
                type : 'DISPARA_ALERTA_INCLUIRALTERAR',
                info: 'Curso atualizado com sucesso'
            })
        }).catch((err) => {
            console.log(err);
        })
    }
};

export const excluirCurso = (_id) => {
    return (dispatch) => {
        return axios.delete(URL+_id).then(() =>{
            dispatch(listaCursos(false))
            dispatch({
                type : 'DISPARA_ALERTA_EXCLUIR',
                info: 'Curso excluído com sucesso'
            })
        }).catch((err) => {
            console.log(err);
        })
    }
};

export const selecionaCurso = (curso) => {
    return {
        type: 'SELECIONAR_CURSO',
        info: curso
    }
}

// reducer to indicate we have received all our data from the api
export let concluiGet = (cursos) => {
    return {
        type : 'LISTA_CURSOS',
        info : cursos
    }
}

export const listaCursos = (cleanForm) => {
    return (dispatch) => {
        return axios.get(URL).then(
            (response) => {
                if(cleanForm){
                    dispatch({
                        type : 'ADICIONAR_CURSO'
                    })
                }
                const cursos = response.data
                dispatch(concluiGet(cursos))
            },
            (err) => {
                console.log(err);
            }
        )
    }
}