var mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/note-api');
mongoose.Promise = Promise;

module.exports.Note = require("./note");