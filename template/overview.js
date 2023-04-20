const http = require('http');
const url = require('url');
const fs = require('fs');

//stuff that gets loaded when the server is loaded

//server routes
const server = http.createServer(function(req, res) {
    const pathName = req.url;

    if(pathName === '/') {
        
    }
});

//listening port
server.listen(3000, 'localhost', () => {
    console.log('Listening to req on port 3000')
});