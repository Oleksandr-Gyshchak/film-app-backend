var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var filmBookMarkSchema = new Schema({
    _id: Number,
    favorite: Boolean
});

var FilmBookMark = mongoose.model('FilmBookMark', filmBookMarkSchema);

module.exports = FilmBookMark;