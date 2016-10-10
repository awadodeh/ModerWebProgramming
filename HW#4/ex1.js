var http = require("http");
var fs =require("fs");

// path/to/my/file.txt

http.createServer(function(req,res){
    
    filePath=__dirname+req.url;
    if(fs.existsSync(filePath)){
        fs.createReadStream(filePath).pipe(res);
    }else{
        res.writeHead(404);
        res.end("File Does not Exist");
    }
}).listen(4000,'127.0.0.1');


console.log("Server is running on: http://127.0.0.1:4000");