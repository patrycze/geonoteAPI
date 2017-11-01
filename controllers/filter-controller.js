var FilterModel                 = require('../models/filter-model').filterModel;

// // 4. getAvaliableFilters 

// module.exports.getAvaliableFilters = function(req, res){
// }






// 7. createFilter

module.exports.createFilter = function(req, res) { 
    var NewFilter = FilterModel({
        title: req.body.title
    });

    NewFilter.save(function(err, result){
        if (err) throw err;
        
        res.send(result);
    })
}