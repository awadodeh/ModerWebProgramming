const http = require('http');
const fs = require("fs");
const paths=require("path");
const querystring = require('querystring');

http.createServer(function (req, res) {
 
  // set up some routes
  switch(req.url) {
    case '/':
      // show the user a simple form
      console.log("[200] " + req.method + " to " + req.url);

      if(req.method=='GET'){
          
                // Read the requested file content from file system
                        fs.readFile(paths.join(__dirname,"/index.html"), function (err, data) {
            
            if (err) {
                console.log(err);
                // HTTP Status: 404 : NOT FOUND
                // Content Type: text/plain
                res.writeHead(404, {'Content-Type': 'text/html'});
            }else {	
                //Page found	  
                // HTTP Status: 200 : OK
                // Content Type: text/plain
                res.writeHead(200, {'Content-Type': 'text/html'});	
                
                // Write the content of the file to response body
                res.write(data.toString());		
        }
        // Send the response body 
        res.end();
    });
      }
      break;


    case '/upload':

    const path=__dirname+'/body.txt';
      if (req.method == 'POST') {
        console.log("[200] " + req.method + " to " + req.url);
        var fullBody = '';
        
        req.on('data', function(chunk) {
          // append the current chunk of data to the fullBody variable
          fullBody += chunk.toString();
        });
        
        req.on('end', function() {

          // parse the received body data
          var decodedBody = querystring.parse(fullBody).text;


          fs.writeFile(path, decodedBody, function(error) {
                if (error) {
                console.error("write error:  " + error.message);
                res.writeHead(404, "NOT FOUND", {'Content-Type': 'text/html'});
                } else {
                console.log("Successful Write to " + path);
                // request ended -> do something with the data
                 res.writeHead(200, "OK", {'Content-Type': 'text/html'});
                 res.end('<html><head><title>Uploaded</title></head><body><h1>Data was uploaded to the server.</h1></body></html>');
                }
            });


        });
        break;
        
      } else {
        console.log("[405] " + req.method + " to " + req.url);
        res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
        res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
      }
      
      break;
    default:
      res.writeHead(404, "Not found", {'Content-Type': 'text/html'});
      res.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
      console.log("[404] " + req.method + " to " + req.url);
  };
}).listen(4000,'127.0.0.1');


console.log("Server is running on: http://127.0.0.1:4000");