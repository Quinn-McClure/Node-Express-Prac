//server things
const http = require('http');
//router things (from scratch)
const url = require('url');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    const pathName = req.url;

    if(pathName === '/') {
        res.end('home');
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
            const prodData = JSON.parse(data);
            //console.log(prodData);
            //specify json as type
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Listening to req on port 3000')
});