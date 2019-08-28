//servicos rest
const Cursos = require('./cursos');

Cursos.methods(['get', 'post', 'put', 'delete']);
Cursos.updateOptions({ new: true, runValidators: true });

//obtendo a quantidade de cursos - nova rota
Cursos.route('count', (request, response, next) => { 
    Cursos.count((error, value) => { 
        if (error) {
            response.status(500).json({erros: [error]});
        } else {
            response.json({ value });
        }
    });
});

module.exports = Cursos;