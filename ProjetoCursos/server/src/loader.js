const server = require('./config/server');
require('./config/db');
require('./config/routes')(server);