var express = require('express');
var router = express.Router();
const postController = require('../controllers/postController');
const handleErrorAsync = require('../service/handleErrorAsync');

//index
router.get('/posts', handleErrorAsync(postController.index));
//store
router.post('/posts', handleErrorAsync(postController.store));
//show
router.get('/posts/:id', handleErrorAsync(postController.show));
//delete all
router.delete('/posts', handleErrorAsync(postController.deleteAll));
//delete
router.delete('/posts/:id', handleErrorAsync(postController.deleteOne));
//update
router.patch('/posts/:id', handleErrorAsync(postController.update));

module.exports = router;
