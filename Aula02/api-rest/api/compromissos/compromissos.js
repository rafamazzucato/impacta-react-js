const restful = require('node-restful');
const mongoose = restful.mongoose;

const compromissoSchema = new mongoose.Schema({
    data: { type: Date, required: true },
    descricao: { type: String, required: true },
    responsavel: { type: String, required: true },
    telefone: { type: String }
});

module.exports = restful.model('compromisso', compromissoSchema);
