const express = require('express');

//imported course Controller
const quizController = require('../controllers/quiz.controller').quizController

// CREATE AN EXPRESS ROUTER TO GET THE AUTH ROUTES
const router = express.Router()


//api 
router.get('/:topic_id',quizController.getAllQuiz)

router.get('/topics_done/:user_id/:coursename', quizController.getTopicsDoneQuery)

module.exports=router;
