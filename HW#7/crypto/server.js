const crypto = require('crypto');
var express = require('express'),
    app=express(),
    MongoClient = require('mongodb').MongoClient,
    MongoServer = require('mongodb').Server;

var mongoclient = new MongoClient(new MongoServer("localhost",27017));
var db = mongoclient.db('lab1');

app.get('/', function(req,res){
    db.collection('testCol').findOne({},
    function(err,doc){
        if(err) throw err;

        console.dir(doc.message);

        var key = new Buffer('asaadsaad');

        var plain =decrypt(key, doc.message);

        console.log("\n" +plain);
        res.render('index.ejs',{title:'Decription for My message',message: plain} );

        db.close();
        // return;

        
    });
});

mongoclient.open(function(err,mongoclient){
    if(err) throw err;
    app.listen(8000);
    console.log("Server started on 8000");
});


function decrypt(key, data) {
    var decipher = crypto.createDecipher('aes256', key);
    var decrypted = decipher.update(data, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');

    return decrypted;
}


// app.configure(function () {
//     app.use(express.logger('dev'));   
//     app.use(express.bodyParser());
// });

// app.get('/message', displayMessage);


// app.listen(3000);
// console.log('Listening on port 3000...');


// var displayMessage = function(req, res) {
//     var id = req.params.id;
//     console.log('Retrieving message with key: ' + id);
//     db.collection('wines', function(err, collection) {
//         collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
//             res.send(item);
//         });
//     });
// };