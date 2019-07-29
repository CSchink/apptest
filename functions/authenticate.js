const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const dbUrl = 'mongodb+srv://dbCorey:MVDhmYhNQkp2y8T@cluster0-ymebw.mongodb.net/test?retryWrites=true&w=majority'

exports.handler = function(event, context, callback) {

    context.callbackWaitsForEmptyEventLoop = false;
  
    run().
      then(res => {
        callback(null, res);
      }).
      catch(error => callback(error));
  };

  function run() {
    return co(function*() {
  
      if (conn == null) {
        conn = yield mongoose.createConnection(dbUrl, {
          bufferCommands: false,
          bufferMaxEntries: 0
        });
        conn.model('logindata', mongoose.Schema({
        user: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        },
        {collection:'logindata'} ));
      }
    const M = conn.model('logindata');

    const doc = yield M.find();
    const response = {
      statusCode: 200,
      body: JSON.stringify(doc)
    };
    return response;  
});
}
