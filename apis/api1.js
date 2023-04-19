const http = require('http');
const url = require('url');
const fs = require('fs');

const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%IMAGE%}/g, product.productImage);
}

const data = fs.readFileSync(`data.json`, 'utf-8');
const prodData = JSON.parse(data);

const server = http.createServer(function (req, res) {
    const pathName = req.url;

    if(pathName === '/') {
        //res.end('home');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Listening to req on port 3000')
});