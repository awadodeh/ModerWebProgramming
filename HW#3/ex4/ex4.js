var fs = require("fs");
var path=require('path');


var myPath=path.join(__dirname,'/data/input.txt');

/*************** part:1 */
var stats = fs.statSync(__dirname,'/data/input.txt');
var fileSizeInBytes = stats["size"];


console.log("file size in bytes: "+fileSizeInBytes+" bytes");


/******************* part:2 */
fs.readFile(myPath, "UTF-8", function (err, trex) {
    if (err) throw new err;
  console.log(`\n ${trex.toString()} \n ${trex.slice(10,14)}`);
});
console.log(" Reading File...");




/***********part:3 */
console.log("Going to write into existing file");
fs.writeFile(myPath, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!',  function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data: ");
   fs.readFile(myPath, function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("File read: " + data.toString());
   });
});


/**************part:4 */
fs.appendFile(myPath, 'abc', function (err) {
     if (err) {
      return console.error(err);
   }
});

 console.log("Data appended successfully!");
   console.log("Let's read newly added data: ");
   fs.readFile(myPath, "UTF-8", function (err, trex) {
    if (err) throw new err;
  console.log(`\n ${trex.toString()} `);
});



/**************************part:5 */


   fs.readFile(myPath, "UTF-8", function (err, trex) {
    if (err) throw new err;
     console.log(`\n ${trex.toString()} `);
     trex[10] = "7";
    fs.writeFile(myPath, trex, (e)=>{fs.readFile(myPath, 'utf-8', (e,d)=> console.log(`${d}`))});
});

