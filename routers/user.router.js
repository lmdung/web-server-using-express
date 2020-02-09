var express = require('express');
var multer  = require('multer')
const controller = require('../controller/user.controller')
const validate = require('../validate/user.validate')
var router = express.Router();

var upload = multer({ dest: './public/uploads/' })

router.get('/', controller.index);
router.get('/cookie', (req, res, next) => {
    res.cookie('user-id', 123)
    res.send('hello')
})
router.get('/search', controller.search);
router.get('/create', controller.create);
router.get('/:id', controller.viewByID);
router.post('/create',
    upload.single('avatar'), 
    validate.portCreate, 
    controller.postCreate)
module.exports = router;
