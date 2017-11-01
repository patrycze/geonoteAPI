var mongoose = require('mongoose').set('debug', true);

var Schema = mongoose.Schema;

var NoteModel = new Schema ({
    title: String,
    author: String,
    content: String,
    remainingUses: String,
    maxUses: String,
    position: {
        longitude: String,
        latitude: String
    },
    filterSet: {
        mainFilter: String,
        firstFilter: String,
        secondFilter: String
    }
})

module.exports = {
    noteModel: mongoose.model('noteModel', NoteModel)
}