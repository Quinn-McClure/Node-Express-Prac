const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    const pathName = req.url;

    if(pathName === '/') {
        res.end('THis is the home page');
    }
    else if(pathName === '/movies') {
        res.end('THis is the movies page');
    }
    else {
        res.end('page not found')
    }

    console.log(pathName);
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000');
});