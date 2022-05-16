const req = require('express/lib/request')
const Joi = require('joi')
const sequelizeConnection = require('../config/db.config')

const Topic = require("../models/Topic.model")
//const app = exp

module.exports.topic = ( req,res, next) => {
    console.log('topic middle ware ')
    next()
}