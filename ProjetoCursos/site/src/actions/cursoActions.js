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

export const adicionarCursoOld = (codigo, descricao, cargaHoraria, preco, categoria) => {
    axios.post(URL, { codigo, descricao, cargaHoraria, preco, categoria});
    return {
        type: 'ADICIONAR_CURSO'
    }
}

export const atualizarCursoOld = (_id, codigo, descricao, cargaHoraria, preco, categoria) => {
    axios.put(URL+_id, { codigo, descricao, cargaHoraria, preco, categoria});
    return {
        type: 'ADICIONAR_CURSO'
    }
}

export const excluirCursoOld = (_id) => {
    axios.delete(URL+_id)
    return {
        type: 'ADICIONAR_CURSO'
    }
}

export const adicionarCurso = (codigo, descricao, cargaHoraria, preco, categoria) => {
    return (dispatch) => {
        return axios.post(URL, { codigo, descricao, cargaHoraria, preco, categoria}).then(() =>{
            dispatch(listaCursos())
        }).catch((err) => {
            console.log(err);
        })
    }
};

export const atualizarCurso = (_id, codigo, descricao, cargaHoraria, preco, categoria) => {
    return (dispatch) => {
        return axios.put(URL+_id, { codigo, descricao, cargaHoraria, preco, categoria}).then(() =>{
            dispatch(listaCursos())
        }).catch((err) => {
            console.log(err);
        })
    }
};

export const excluirCurso = (_id) => {
    return (dispatch) => {
        return axios.delete(URL+_id).then(() =>{
            dispatch(listaCursos())
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

export const listaCursos = () => {
    return (dispatch) => {
        return axios.get(URL).then(
            (response) => {
                const cursos = response.data
                dispatch(concluiGet(cursos))
            },
            (err) => {
                console.log(err);
            }
        )
    }
}