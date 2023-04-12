const http = require('http');
const url = require('url');

const server = http.createServer(function(req, res) {
    const pathName = req.url;

    if (pathName === '/') {
        res.end('Welcome to home page');
    }
    else if(pathName === 'test') {
        res.end('this is a test');
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
})