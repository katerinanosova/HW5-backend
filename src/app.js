const http = require('http');
const getUsers = require('./modules/users');

const hostname = '127.0.0.1';
const port = 3003;


const server = http.createServer((request, response) => {
    const url = new URL(request.url, `http://${hostname}`);
    const params = url.searchParams;
    const name = params.get('hello');


    if (params.has('hello')) {
        if (name === '') {
            response.statusCode = 400;
            response.statusMessage = 'Error';
            response.setHeader = 'Content Type: text/plain';
            response.write(`Write your name`);
            response.end();
        } 
            response.statusCode = 200;
            response.statusMessage = 'OK';
            response.setHeader = 'Content Type: text/plain';
            response.write(`Hello, ${name}`);
            response.end();
    
            return;
        
    } 
    
    if (request.url === '/users') {
        response.statusCode = 200;
        response.statusMessage = 'OK';
        response.setHeader = 'Content Type: application/json';
        response.write(getUsers());
        response.end();

        return;

    } else {
        response.statusCode = 500;
        response.statusMessage = 'Internal Server Error';
        response.setHeader = 'Content Type: text/plain';
        response.write('');
        response.end();
    }

});

server.listen(port, hostname, () => {
    console.log(`Сервер запущен по адресу ${hostname}:${port}`);
});