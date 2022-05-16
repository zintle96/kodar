//connect to database
const sequelizeConnection = require('../config/db.config');

module.exports.progressController = {

    getProgressData: async (req, res) => {

        try {

            const progress  = req.params.id;

            //query from progress
            const trackProgress = await sequelizeConnection.query(`SELECT percentage FROM progress JOIN course ON progress.course_id = course.course_id WHERE progress_id ='${progress}'`);

            console.log('percentage :', progress);

            res.json(trackProgress);

        } catch(error) {
            res.json(error.message)
        }
        
    }
}