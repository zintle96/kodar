const req = require('express/lib/request')
const Joi = require('joi')
const sequelizeConnection = require('../config/db.config')

// GET THE USER MODEL
const User = require('../models/User.model')



// REGISTER FORM AUTH VALIDATION
module.exports.registerValidation = async (req, res, next) => {

    const { phone_number, password } = req.body 

    const schema = Joi.object({
        phone_number: Joi.string().min(10).max(16).pattern(/^[0-9]+$/).required(),
        password: Joi.string().required().min(8)
    })

    const { error, value } = schema.validate({ phone_number, password })

    if (  error != undefined && error.details[0].type == 'string.pattern.base' ) {
            error.details[0].message = 'Phone number must consist of only numbers'
        }
    
    req.authErrMessage = error == undefined ? undefined : error.details[0].message
    req.authenticatedUser = value

    console.log('req error message: ', req.authErrMessage)
    next()
}


// LOGIN VALIDATION MIDDLEWARE
module.exports.loginValidation = (req, res, next) => {

    const { phone_number, password } = req.body 

    const schema = Joi.object({
        phone_number: Joi.string().min(10).max(16).pattern(/^[0-9]+$/).required(),
        password: Joi.string().required().min(8)
    })

    const { error, value } = schema.validate({ phone_number, password })

    if (  error != undefined && error.details[0].type == 'string.pattern.base' ) {
            error.details[0].message = 'Phone number must consist of only numbers'
        }
    
    req.authErrMessage = error == undefined ? undefined : error.details[0].message
    req.authenticatedUser = value
    console.log(req.authErrMessage)
    next()

}

module.exports.test = (req, res, next) => {
    console.log('message from test middleware')
    next()
}

