const http = require('http');

let myName = "김보경";
let content = String.raw`<h2>${myName}</h2>`;

const server = http.createServer((req,res) => {
    //response.setContentType과 같음
    res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'})
    res.end(content);
});
server.listen(3000);