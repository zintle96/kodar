const express = require('express');

// CREATE AN EXPRESS ROUTER TO GET THE AUTH ROUTES
const router = express.Router();

// import overview CONTROLLER
const overviewController = require('../controllers/overview.controller').overviewController

//get evetything from overview table
router.get('/:courseName', overviewController.getOverviewData)

module.exports = router;