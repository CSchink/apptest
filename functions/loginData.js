var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
let conn = null;

const saltRounds = 10;

const dbUrl = 'mongodb+srv://dbCorey:MVDhmYhNQkp2y8T@cluster0-ymebw.mongodb.net/sottlab?retryWrites=true&w=majority'

exports.handler = function(event, context, callback) {

  context.callbackWaitsForEmptyEventLoop = false;

  run().
    then(res => {
      callback(null, res);
    }).
    catch(error => callback(error));
};

  loginConnect = () => {
  return co(function*() {

    if (conn == null) {
      conn = yield mongoose.createConnection(dbUrl, {
        bufferCommands: false,
        bufferMaxEntries: 0
      });
      conn.model('logindata', mongoose.Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true }
      },
        {collection:'logindata'} ));
    }
    logindata.pre('save', function(next) {
      if (this.isNew || this.isModified('password')) {
        const document = this;
        bcrypt.hash(document.password, saltRounds, 
          function(err, hashedPassword) {
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
    })

    logindata.methods.isCorrectPassword = function(password, callback){
      bcrypt.compare(password, this.password, function(err, same) {
        if (err) {
          callback(err);
        } else {
          callback(err, same);
        }
      });
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

// module.exports = mongoose.model('logindata', logindata)
