const express = require('express');
const { validateDataRegister,validateDataLogin } = require('../Middleware/customer.middleware');
const { register, login } = require('../Controllers/customer.controller');
const router = express.Router();

router.post('/register',validateDataRegister,register);

router.post('/login',validateDataLogin,login);

module.exports = router;