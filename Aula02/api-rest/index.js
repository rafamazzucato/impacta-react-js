const app = require('./config/server')
require('./config/db')
require('./config/routes')(app);