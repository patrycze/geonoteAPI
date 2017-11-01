var mongoose = require('mongoose').set('debug', true);

var Schema = mongoose.Schema;

var Filter = new Schema({
    title: String
})

module.exports = {
    filterModel: mongoose.model('filterModel', Filter)
}