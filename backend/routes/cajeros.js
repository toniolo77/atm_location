var express = require('express');
var router = express.Router();

const cajeroController = require('../controller/cajero');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', cajeroController.getCajeros);
router.get('/update', cajeroController.fixCajero);


module.exports = router;
