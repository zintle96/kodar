//Get lesson model
const Lesson = require('../models/Lesson.model');

module.sequelizeConnection.lessons = async (req,res,next)=>{
    
    console.log('lessons middleWare')
    next()
}
