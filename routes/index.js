const router = require('express').Router();
const Controller = require('../controllers/home-controller');

const controller = new Controller();
/* GET users listing. */
router.get('/home', controller.call);


module.exports = router;
