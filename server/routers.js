
var controller = require('./controllers/controller');

var router = require('express').Router();


router.get('/search', controller.elastiService.search);
module.exports = router;