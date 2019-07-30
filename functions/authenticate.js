const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dbUrl = 'mongodb+srv://dbCorey:QCNrQNjjEncV8fT@cluster1-e2c8k.mongodb.net/logindata?retryWrites=true&w=majority'


exports.handler = function(event, context, callback) {

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
}



