const express = require('express')

// CREATE AN EXPRESS ROUTER TO GET THE AUTH ROUTES
const router = express.Router()

// GET THE AUTH MIDDLEWARE
const authMiddleware = require('../middlewares/auth.middleware')

// GET THE AUTH CONTROLLER
const authController = require('../controllers/auth.controller').authController

// REGISTER POST REQUEST HANDLE
router.post('/register', authMiddleware.registerValidation, authController.register)

// LOGIN POST REQUEST HANDLE
router.post('/login', authMiddleware.loginValidation, authController.login)

// TEST
router.get('/test', authController.forgotPassword)

module.exports = router