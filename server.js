const http = require('http');
const app = require('./app');

normalizePort = v=>{

    const port = parseInt(v,10);
    if(isNaN(v)) return v;
    if(port>=0) return port;
    else return false;
};

const port = normalizePort(process.env.PORT || '3000');

app.set('port',port);

const errorHandler = error=>{
    if(error.syscall!=='listen')throw error;
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe'+ address : 'port:' + port;
    switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges.');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(bind + ' is already in use.');
          process.exit(1);
          break;
        default:
          throw error;
      }
    
};

const server = http.createServer(app);

server.on('error',errorHandler);
server.on('listening',()=>{
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe'+ address : 'port:' + port;
    console.log('listeinig on ' + bind)
});

server.listen(port);