var db = require('../models');

exports.getNotes = function(req,res) {
    db.Note.find().then(function(notes){
        res.json(notes);
    }).catch(function(err){
        res.send(err);
    })
};

exports.createNote = function(req,res) {
    db.Note.create({ title: req.body.title,text:req.body.text})
    .then(function(newNote){
        res.status(201).json(newNote);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.getNote = function(req,res) {
    db.Note.findById(req.params.noteId)
        .then(function(foundNote){
         res.json(foundNote);
        }).catch(function(err){
         res.send(err);
        });
};

exports.updateNote = function(req,res) {

var updateNote = {
    title: req.body.title,
    text: req.body.text
};
    db.Note.findOneAndUpdate({_id:req.params.noteId},updateNote,{new:true})
    .then(function(note){
        res.json(note);
    }).catch(function(err){
        res.send(err);
    })
};

exports.removeNote = function(req,res) {
    db.Note.remove({_id:req.params.noteId}).then(function(notes){
        res.send('NOTE REMOVED');
    }).catch(function(err){
        res.send(err);
    })
};
module.exports=exports;