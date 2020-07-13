var express = require('express');
var router = express.Router();

const cajeroController = require('../controller/cajero');


router.get('/', cajeroController.getCajeros);


module.exports = router;
