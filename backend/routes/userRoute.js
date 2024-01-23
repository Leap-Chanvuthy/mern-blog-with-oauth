const express = require('express');
const {test , anotherTest} = require('../controllers/userController');

const router = express.Router();

router.get('/test' , test);
router.get('/test-2' , anotherTest);


module.exports = router;