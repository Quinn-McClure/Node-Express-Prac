const http = require('http');
const url = require('url');
const fs = require('fs');

//stuff that gets loaded when the server is loaded
const replaceTemplate = (temp, item) => {
    let output = output.replace(/{%IMAGE%}/g, item.image);

    return output
}

const page = fs.readFileSync(`${__dirname}/overview.html`);


//server routes
const server = http.createServer(function(req, res) {
    const pathName = req.url;

    if(pathName === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
    }
});

//listening port
server.listen(3000, 'localhost', () => {
    console.log('Listening to req on port 3000')
});