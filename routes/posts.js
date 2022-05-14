var express = require('express');
var router = express.Router();
const controller = require('../controllers/postController');
const handleErrorAsync = require('../service/handleErrorAsync');

//index
router.get('/posts', handleErrorAsync(controller.index));
//store
router.post('/posts', handleErrorAsync(controller.store));
//show
router.get('/posts/:id', handleErrorAsync(controller.show));
//delete all
router.delete('/posts', handleErrorAsync(controller.deleteAll));
//delete
router.delete('/posts/:id', handleErrorAsync(controller.deleteOne));
//update
router.patch('/posts/:id', handleErrorAsync(controller.update));

module.exports = router;
