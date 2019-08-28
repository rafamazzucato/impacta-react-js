//criando o schema
const restful = require('node-restful');
const mongoose = restful.mongoose; //referencia ao mongoose do restful

//definindo o schema contato
const contatoSchema = new mongoose.Schema({
    data: { type: Date },
    nome: { type: String },
    email: {type: String},
    assunto: { type: String }
});

module.exports = restful.model('contato', contatoSchema);