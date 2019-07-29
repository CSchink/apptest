const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dbUrl = 'mongodb+srv://dbCorey:MVDhmYhNQkp2y8T@cluster0-ymebw.mongodb.net/logindata?retryWrites=true&w=majority'

exports.handler = function(event, context, callback) {

    context.callbackWaitsForEmptyEventLoop = false;
  
    run().
      then(res => {
        callback(null, res);
      }).
      catch(error => callback(error));
  };

//   function run() {
//     return co(function*() {
  
//       if (conn == null) {
//         conn = yield mongoose.createConnection(dbUrl, {
//           bufferCommands: false,
//           bufferMaxEntries: 0
//         });
//         conn.model('logindata', mongoose.Schema({
//         user: { type: String, required: true, unique: true },
//         password: { type: String, required: true },
//         },
//         {collection:'logindata'} ));
//       }
//     const M = conn.model('logindata');

//     const doc = yield M.find();
//     const response = {
//       statusCode: 200,
//       body: JSON.stringify(doc)
//     };
//     return response;  
// });
// }


const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("logindata").collection("logindata");
  // perform actions on the collection object
  collection.pre('save', function(next) {
    if (this.isNew || this.isModified('password')) {
      const document = this;
      bcrypt.hash(this.password, saltRounds, function(err, hashedPassword) {
        if (err) {
          next(err);
        } else {
          document.password = hashedPassword;
          next();
        }
      });
    } else {
      next();
    }
  });
collection.methods.isCorrectPassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, same) {
        if (err) {
            callback(err);
        } else {
            callback(err, same);
        }
    })
}
  const { user , password } = req.body;
collection.findOne({ user }, function(err, user) {
  if (err) {
    console.error(err);
    res.status(500)
      .json({
      error: 'Internal error please try again'
    });
  } else if (!user) {
    res.status(401)
      .json({
      error: 'Incorrect email or password'
    });
  } else {
    collection.isCorrectPassword(password, function(err, same) {
      if (err) {
        res.status(500)
          .json({
          error: 'Internal error please try again'
        });
      } else if (!same) {
        res.status(401)
          .json({
          error: 'Incorrect email or password'
        });
      } else {
        // Issue token
        const payload = { user };
        const token = jwt.sign(payload, secret, {
          expiresIn: '1h'
        });
        res.cookie('token', token, { httpOnly: true }).sendStatus(200);
      }
    });
  }
});

  client.close();
});

