const express = require('express');

// CREATE AN EXPRESS ROUTER TO GET THE AUTH ROUTES
const router = express.Router()

const progressController = require('../controllers/progress.controller').progressController

//get evetything from overview table
router.get('/:id', progressController.getProgressData)


module.exports = router;