const express = require('express');
const { createComment } = require('../Controllers/comment.controller');
const passport = require('passport');
const checkRole = require('../Middleware/checked.role');
const router = express.Router();

router.post('/comment/:id/event',passport.authenticate('jwt',{session: false}),checkRole('USER'),createComment);

module.exports = router
