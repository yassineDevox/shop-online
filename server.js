const http = require('http');
const app = require('./app');
const { env } = require('process');

app.set('port',env.process.PORT || 3000);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);