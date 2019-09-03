import axios from 'axios';

const URL = 'http://localhost:3200/ws/contatos'

export const dataInput = e => ({
    type: 'DATA_INPUT',
    info: e.target.value
});

export const nomeInput = e => ({
    type: 'NOME_INPUT',
    info: e.target.value
});

export const emailInput = e => ({
    type: 'EMAIL_INPUT',
    info: e.target.value
});

export const assuntoInput = e => ({
    type: 'ASSUNTO_INPUT',
    info: e.target.value
});

export const adicionarContato = (data, nome, email, assunto) => {
    const request = axios.post(URL, { data, nome, email, assunto });
    return {
        type: 'ADICIONAR_CONTATO',
        info: request
} };