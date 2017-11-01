var NoteModel = require('../models/note-model').noteModel;

// 1. createNote 

module.exports.createNote = function(req, res){
    
        var newNote = NoteModel({
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
            maxUses: req.body.content,
            position: req.body.position,
            remainingUses: 50,
            category: req.body.category,
            filterSet: req.body.filterSet
        });
    
        newNote.save(function(err,results){
            if(err) throw err;
            res.send(results);
        });
    } 
    
    
    
    
    
    
    // 2. useNote // POST 
    
    module.exports.useNote = function(req, res){
    
        NoteModel.findById({ _id: req.body.id}, function(err, resultId){
            if(err) throw err;
            NoteModel.update({_id: req.body.id}, {
                remainingUses: resultId.remainingUses-1
            }, function(err, result) {
                res.send(result.remainingUses);
            })
            })
    
    }
    
    
    
    
    
    
    
    // // 3. showNearestNotes // POST
     module.exports.showNearestNotes = function(req, res){
        NoteModel.find({}, function(err, obj) {
            obj.forEach(function(element, i){
                if((element.position.longitude - req.body.position.longitude) >= 20) {
                    if((element.position.latitude - req.body.position.latitude) >= 20) {        
                        delete obj[i];
                    }
                }
            });
            res.send(obj); 
        })
    
     }
    
    
    
    
    