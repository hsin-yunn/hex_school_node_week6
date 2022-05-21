var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const handleErrorAsync = require('../service/handleErrorAsync');

//index
router.get('/users', handleErrorAsync(userController.index));
//store
router.post('/users', handleErrorAsync(userController.store));
//show
router.get('/users/:id', handleErrorAsync(userController.show));
//signin
router.post('/signin', handleErrorAsync(userController.signin));

module.exports = router;
