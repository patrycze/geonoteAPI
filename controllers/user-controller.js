var UserModel                   = require('../models/user-model').userModel;
var bodyParser                  = require('body-parser');
var FilterModel                 = require('../models/filter-model').filterModel;

module.exports.createUser = function(req, res){

    var newUser = UserModel({
        userName: req.body.userName // params in postname!!!!!
    });

    newUser.save(function(err, results){
        if (err) throw err;

        res.send(results);
    });    
}

module.exports.getUserFilters = function(req, res){
    FilterModel.find({}, function(err, result){
        if (err) throw err;

        res.send(result);
    })
}

module.exports.getAllUsers = function(req, res) {
    UserModel.find({}, function(err, result){
        if(err) throw err;
        res.send(result);
    })
}

module.exports.findUser = function(req, res) {
    UserModel.find({userName: req.query.uname}, function(err, result){
        console.log(req.query.uname); // WE HAVE QUERY!!!!
        if(err) throw err;
        res.send(result);
    })
}

module.exports.findUserById = function(req, res) {
    UserModel.findById({ _id: req.query.id}, function(err, resultId){
        if(err) throw err;
        res.send(resultId);
    })
}

module.exports.updateUser = function(req, res) {
    app.post('/api/users', function(req, res){
        if(req.body.id) {
            UserModel.findByIdAndUpdate(req.body.id, {
                userName: req.body.userName}, function(err){
                    if (err) throw err;
                    res.send('Success');
                    }
                )
            } else {
                var newUser = UserModel({
                    userName: req.body.userName // params in postname!!!!!
                });
                newUser.save(function(err, results){
                    res.send(results);
                })
           }
        }) 
}


module.exports.deleteUser = function(req, res) {
        UserModel.findByIdAndRemove(req.body.id, function(err, results){
            if (err) throw err; 
            res.send('Success');
        })
}