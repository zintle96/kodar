const express = require('express')

// CREATE AN EXPRESS ROUTER TO GET THE AUTH ROUTES
const router = express.Router()

//get topic controller
const lessonController = require('../controllers/lesson.controller').lessonController;
const topicController = require('../controllers/topic.controller').topicController

//topic router
router.get('/:coursename', topicController.topic)


module.exports = router