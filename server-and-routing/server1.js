 const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    const pathName = req.url;

    if(pathName === '/') {
        res.end('This is the home page');
    }
    else if(pathName === '/movies') {
        res.end('This is the movies page');
    }
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        res.end('<h1>page not found</h1>');
    }
    console.log(pathName);
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000');
});