//exersice 1 print the buffer
/******************************* */
const buffer1 = new Buffer(100);
//fill the buffer
for (var i = 0 ; i < 100 ; i++) {
  buffer1[i] = i + 65;
}
console.log( "buffer1 content: "+ buffer1.toString('ascii') + "\n");       

/****************************** */


//exersice 2 slice and print the buffer
/******************************* */

//slicing buffer
var buffer2 = buffer1.slice(40,60);
console.log("buffer2 content: " + buffer2.toString() +"\n");   


/****************************** */



/****************************** */


//exersice 3 copy and print the buffer
/******************************* */

var buffer3 = new Buffer(20);

var targetStart =0,
    sourceStart=40,
    sourceEnd=60;

buffer1.copy(buffer3,targetStart,sourceStart,sourceEnd);

console.log("buffer2 content: " + buffer3.toString());   


/****************************** */