const http = require('http');
const url = require('url');

const server = http.createServer(function(req, res) {

});

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
})