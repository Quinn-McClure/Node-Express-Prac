const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    console.log('hello');
    res.end('hello from server');
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000');
});