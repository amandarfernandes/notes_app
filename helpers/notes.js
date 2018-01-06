var db = require('../models');

exports.getNotes = function(req,res) {
    db.Note.find().then(function(notes){
        res.json(notes);
    }).catch(function(err){
        res.send(err);
    })
};

exports.createNote = function(req,res) {
    db.Note.create({title:req.body.title,text:req.body.body})
    .then(function(newNote){
        res.status(201).json(newNote);
    })
    .catch(function(err){
        res.send(err);
    });
};

module.exports=exports;