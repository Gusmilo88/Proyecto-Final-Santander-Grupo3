const express = require('express');
const { createBuy, searchByBuy } = require('../Controllers/buy.controller');
const passport = require('passport');
const checkRole = require('../Middleware/checked.role');
const router = express.Router();

router.post('/buy',passport.authenticate('jwt',{session:false}),checkRole('USER'), createBuy);

router.get('/buy',passport.authenticate('jwt',{session:false}),checkRole('USER') ,searchByBuy);

module.exports = router;