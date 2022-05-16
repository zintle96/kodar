
//connect to database
const sequelizeConnection = require('../config/db.config');


module.exports.overviewController = {
    
    getOverviewData: async (req, res) => {

        try{
            const courseName = req.params.courseName;

            // CHECK IF COURSENAME exists
            const retrievedCourseNameQuery = await sequelizeConnection.query(`SELECT course_id FROM course WHERE course_name = '${courseName}'`);
            const doesCourseNameExists = retrievedCourseNameQuery[0].length == 0 ? false : true

            if( !doesCourseNameExists ){
                throw new Error('Course name is not recognized')
            }

            // console.log('content : ', overview[0]);
            const overview = await sequelizeConnection.query(`SELECT * FROM overview JOIN course ON overview.course_id = course.course_id WHERE course.course_name = '${courseName}'`);

            console.log('content : ', courseName);


            res.json({error: null, overview});

        } catch(error) {
            res.json({error: error.message, overview: null})
        }

        
  }


}