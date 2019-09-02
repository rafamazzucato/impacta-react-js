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
    const request = axios.post(URL, { codigo, descricao, cargaHoraria, preco, categoria});
    return {
        type: 'ADICIONAR_CURSO',
        info: request
} };