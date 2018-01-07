var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/notes');

router.route("/")
.get(helpers.getNotes)
.post(helpers.createNote);

router.route("/:noteId")
.get(helpers.getNote)
.put(helpers.updateNote)
.delete(helpers.removeNote);
module.exports=router;