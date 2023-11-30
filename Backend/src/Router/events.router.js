const express = require('express');
const { getAllEvents, getEventById, createdEvents, updateEvent, deleteEvent, getCommentByEvent, createManyEvents } = require('../Controllers/events.controller');
const passport = require('passport');
const checkRole = require('../Middleware/checked.role');
const router = express.Router();

router.get('/events', getAllEvents);

router.get('/events/:id', getEventById);

router.get('/event/:id/message', getCommentByEvent);

router.post('/events',passport.authenticate('jwt',{session: false}),checkRole('ADMIN'),createdEvents);

router.post('/events/many',createManyEvents);


router.put('/events/:id',passport.authenticate('jwt',{session: false}),checkRole('ADMIN'),updateEvent);

router.delete('/events/:id',passport.authenticate('jwt',{session: false}),checkRole('ADMIN'),deleteEvent);

module.exports = router;