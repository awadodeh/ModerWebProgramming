var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/contactus', function(req, res, next) {
  var errors = req.validationErrors();
  res.render('contactus',  { title: 'Contact Us', errors: errors, csrftoken: req.csrfToken()});
});


/* POST contactus request */

router.post('/contactus', function(req,res,next){

  /** check if there is any validationErrors */
    req.assert("name", "Full name cannot be empty").notEmpty();
    req.assert("message", "Message cannot be empty").notEmpty();
    var errors= req.validationErrors();
    if(errors){
      
      console.log(errors);
      res.render('contactus',  { title: 'Contact Us', errors: errors, csrftoken: req.csrfToken()});
      return;

    }else{

      var input={

        name:req.body.name,
        type:req.body.type,
        message:req.body.message
  
      };

      var stringify = JSON.stringify(input);

      console.dir(input);
      console.dir(stringify);

      fs.writeFile(path.join(__dirname,"/data.txt"), stringify , function(err){
              if (err){
                  console.dir(err);
                  throw err;
              } 
      });


      // res.send('Thank you , '+ input.name  + ". <br> Your " + input.type + " has been submitted, we will be back to you soon.");
      res.render('thanks.ejs',  { title: 'Thank you',  object: input});
    }


});

module.exports = router;
