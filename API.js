const express = require('express');
const router = express.Router();
var database = require('./database.js');


router.get('/', database.findAll);

router.post('/', database.create);

router.get('/:id', database.findById);

router.put('/:id', database.update);

router.delete('/:id', database.delete);

module.exports = router;