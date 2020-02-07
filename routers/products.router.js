var express = require('express');
// const controller = require('../controller/auth.controller')
const controller = require('../controller/products.controller')
var router = express.Router();

router.get('/', controller.products);
// router.post('/login', controller.portLogin);
module.exports = router;