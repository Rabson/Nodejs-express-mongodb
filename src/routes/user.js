var express = require('express');
var router = express.Router();

const users = require('../controllers/user.controller');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/getUser', users.getUSer);

router.post('/addUser', users.addUser);

router.post('/updateUser', users.updateUser);

router.post('/deleteUser', users.deleteUser);

module.exports = router;
