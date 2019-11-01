var express = require('express');

const users = require('./user');

const router = express.Router();

router.use('/', users);

module.exports = router;
