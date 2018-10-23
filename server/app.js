const http = require('http');
const URLParser = require('./URLParser');

function generateOutput(name = 'World') {
    return `Hello ${name}!`;
}

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let ausgabe;

    const parser = new URLParser(req.url);
    parser.parse();

    if (!parser.getFolder().length) {
        ausgabe = 'Hello World';
    } else {
        ausgabe = generateOutput(parser.getFolder()[0]);
    }

    res.end(ausgabe);
}).listen(8080);
