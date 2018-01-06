var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/notes');

router.route("/")
.get(helpers.getNotes)
.post(helpers.createNote);

module.exports=router;