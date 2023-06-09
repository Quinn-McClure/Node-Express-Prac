const http = require('http');
const path = require('path');
const url = require('url');

const server = http.createServer(function(req, res) {
    const pathName = req.url;

    if(pathName === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('<h1>Home</h1><p>hello all</p>');
    }
    else if(pathName === '/bio') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('<h1>My bio</h1>');
    }
    else {
        res.end('Page Not Found');
        //res.end('<h1>page not found</h1>');
        console.log(req.url);
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
})