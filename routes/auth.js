const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { login } = require('../controllers/auth');

router.post('/login', [
    check('email','Please provide a valid email').isEmail(),
    check('password','Please provide a password').exists()
] , login);

module.exports = router;