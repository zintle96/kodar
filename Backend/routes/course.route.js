const express = require('express');
const checkUserAuthenticatedMiddleware = require('../middlewares/checkUserAuthenticated.middleware');


//imported course Controller
const courseController = require('../controllers/course.controller').courseController;

// CREATE AN EXPRESS ROUTER TO GET THE AUTH ROUTES
const router = express.Router()


//get All the courses 
router.get('/', checkUserAuthenticatedMiddleware.verify ,courseController.getAllCourses);

router.get('/lessons/:id',courseController.getLessonNumber);

router.get('/progress/:user_id', courseController.getProgress);

router.put('/progress', courseController.updateProgress);

module.exports= router;