const express = require('express')

// CREATE AN EXPRESS ROUTER TO GET THE AUTH ROUTES
const router = express.Router()

//get topic middleware 
// const topicMiddleware = require('../middlewares/topic.middleware');

//get topic controller
const lessonController = require('../controllers/lesson.controller').lessonController;
const topicController = require('../controllers/topic.controller').topicController

//topic router
router.get('/:topic_id/:lesson_id',lessonController.lessonContent)

router.get('/:topic_id', topicController.lessons)

module.exports = router