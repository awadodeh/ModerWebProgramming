require('http').createServer(function(req, res){
     require('fs').createReadStream('./node.jpg').pipe(res);
}).listen(8081, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8081/');