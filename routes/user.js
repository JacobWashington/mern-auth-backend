const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/test', ctrl.user.test);

module.exports = router;