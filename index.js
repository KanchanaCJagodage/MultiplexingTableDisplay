var http = require('http');
var mt  = require('./mtmodule');
const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter an integer: '));

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(mt.mtable(number));
    res.end();
}).listen(8000);