var mongoose = require('mongoose');
var noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required: 'title cannot be blank!'
    },
    text: {
        type:String
    },
    created: {
        type:Date,
        default:Date.now
    }
});

var Note  = mongoose.model('Note',noteSchema);
module.exports = Note;