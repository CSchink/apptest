var co = require('co');
var mongoose = require('mongoose');
const dotenv = require('dotenv').config()

let conn = null;

const dbUrl = process.env.DB_URL

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
      conn.model('sottlab');
    }

    const M = conn.model('sottlab');

    const doc = yield M.find();
    const response = {
      statusCode: 200,
      body: JSON.stringify(doc)
    };
    return response;
  });
}