var mongoose = require('mongoose').set('debug', true);

var Schema = mongoose.Schema;

var user = new Schema ({
    userName: String
})

var test = new Schema ({
    test: String
})

var user = mongoose.model('userModel', user);
var Test = mongoose.model('test', test);

module.exports = {
    userModel: user,
    test: Test 
}