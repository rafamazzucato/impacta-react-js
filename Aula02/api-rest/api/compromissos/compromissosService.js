const Compromissos = require('./compromissos');

Compromissos.methods(['get', 'post', 'put', 'delete']);
Compromissos.updateOptions({ new: true, runValidators: true });

module.exports = Compromissos;