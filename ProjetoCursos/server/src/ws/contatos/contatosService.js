//servicos rest
const Contatos = require('./contatos');

Contatos.methods(['get', 'post', 'put', 'delete']);
Contatos.updateOptions({ new: true, runValidators: true });

module.exports = Contatos;