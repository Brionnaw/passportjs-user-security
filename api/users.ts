// import modules
import express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let crypto = require('crypto');
let jwt= require('express-jwt');

//Model
let User = mongoose.model('User', {
  email: String,
  username:{
    type:String,
    unique:true
  },
  password: String,
  salt:String,
})

// Post- register user
router.post('/users/register', function(req, res) {
let salt = crypto.randomBytes(16).toString('hex');
let hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64).toString('hex');

    let newUser = new User({
    email: req.body.email,
    username:req.body.username,
    password:hash,
    salt:salt
    });
    newUser.save((err, user) => {
      if(err) {
        console.log;
        res.send(err);
      }else {
        console.log(res);
        res.send(user);
      }
      });
    });

    //POST - login user
    router.post('/users/login', function(req, res) {
      User.find({username: req.body.username}, function(err, user) {
        if(user.length <1) {
        res.send({message:'incorrect username'});
      }else{
        let hash =  crypto.pbkdf2Sync(req.body.password, user[0].salt, 1000, 64).toString('hex');
        if(hash === user[0].password) {
          res.send({message:"Correct"});
      } else {
        res.send({message:"Incorrect password"});
      }
    }
  })
  });
    // export router
    export = router;
