const dotenv = require('dotenv').config({path: 'C:\Users\corey\sottlab3\src\.env'})
var co = require('co');
var mongoose = require('mongoose');

let conn = null;

//if error .env contains Mongodb code

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
      conn.model('historylab', mongoose.Schema({
        date: {
      Type:Date
  },
  entry: {
      Type:String
  },
  century: {
      Type:String
  },
  force: {
      Type:String
  },
  primary: {
      Type:String
  },
  entity: {
      Type:String
  },
  role: {
      Type:String
  },
  originating: {
      Type:String
  },
  regiona: {
      Type:String
  },
  target: {
      Type:String
  },
  city: {
      Type:String
  },
  regionb: {
      Type:String
  },
  sottcategory: {
      Type: String
  },
  numbers: {
      Type: Number
  },
  numberstype: {
      Type: String
  },
  source: {
      Type: String
  },
  page: {
      Type: String
  }, 
  }, 
  { collection : 'historylab' }   ));
    }

    const M = conn.model('historylab');

    const doc = yield M.find();
    const response = {
      statusCode: 200,
      body: JSON.stringify(doc)
    };
    return response;
  });
}

