var express                 = require('express');
var config                  = require('./config');
var mongoose                = require('mongoose');
var bodyParser              = require('body-parser');
var app                     = express();
var userController          = require('./controllers/user-controller')
var jwt                     = require('jsonwebtoken');
var authenticateController  = require('./controllers/authenticate-controller');
var filterController        = require('./controllers/filter-controller');
var noteController          = require('./controllers/note-controller');
var port = 3000 || process.env.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(config.getDbConnections());  


var secureRoutes = express.Router();

app.use('/secure-api', secureRoutes)

app.get('/jwt', authenticateController.authenticate)
//app.post('/post-data', userController.postUsers);


//Validation Middleware
secureRoutes.use(function(req, res, next){
    var token = req.body.token || req.headers['token'];
    
    if(token){
        jwt.verify(token, 'shhhhh', function(err, decode){
            if (err){
                res.status(500).send('invalid token');
            } else {
                next();
            }
        })
    } else {
        res.send('we havent it, please send token');
    }
});
app.post('/api/note/use', noteController.useNote);
app.post('/api/note/create', noteController.createNote);
app.post('/api/note/near', noteController.showNearestNotes);
app.post('/api/filter/create', filterController.createFilter);
app.post('/api/user/create', userController.createUser);

app.get('/api/user/getfilters', userController.getUserFilters);
app.get('/api/user/', userController.getAllUsers);
app.get('/api/user/find', userController.findUser);
app.get('/api/user/find/id', userController.findUserById);
app.get('/api/user/delete', userController.deleteUser);
secureRoutes.post('/post-data', userController.createUser);
app.listen(port);
