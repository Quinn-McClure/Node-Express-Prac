const http = require('http');
const url = require('url');
const fs = require('fs');

//stuff that gets loaded when the server is loaded
const replaceTemplate = (temp, item) => {
    let output = output.replace(/{%IMAGE%}/g, item.image);

    return output
}

const page = fs.readFileSync(`${__dirname}/overview.html`);

const jData = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const data = JSON.parse(jData);


//server routes
const server = http.createServer(function(req, res) {
    const pathName = req.url;

    if(pathName === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});

        const imageHtml = data.map(element => replaceTemplate(page, element)).join('');

        const output = page.replace('{%IMAGE%}', page);
    }
});

//listening port
server.listen(3000, 'localhost', () => {
    console.log('Listening to req on port 3000')
});