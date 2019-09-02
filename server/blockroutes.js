const express = require('express');
const router = express.Router();
const truffleController = require('./blockcontroller');
// get info from truffle smart contract call
router.get('/accounts',truffleController.getAccounts);
router.get('/greet',truffleController.callGreet);
module.exports = router;