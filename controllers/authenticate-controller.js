var jwt = require('jsonwebtoken');

module.exports.authenticate = function(req, res){
    
    var user = { 
        username: 'test',
        password: 'test'
    }

    var token = jwt.sign(user, 'shhhhh', { expiresIn: 4000 });

    res.json({
        success: true,
        token: token
    });
}

