var express = require('express');
var router = express.Router();
const controller = require('../controllers/userController');
const handleErrorAsync = require('../service/handleErrorAsync');

//index
router.get('/users', handleErrorAsync(controller.index));
//store
router.post('/users', handleErrorAsync(controller.store));
//show
router.get('/users/:id', handleErrorAsync(controller.show));
//signin
router.post('/signin', handleErrorAsync(controller.signin));

module.exports = router;
