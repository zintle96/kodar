//database connection
const sequelizeConnection = require("../config/db.config");

//Create a course controller to get all courses
module.exports.courseController = {
  getAllCourses: async (req, res) => {

    try {
      
      await sequelizeConnection.authenticate();
      const courses = await sequelizeConnection.query("SELECT * FROM course");
      res.json({ courses: courses[0] });

    } catch(error){
        res.json({error: error.message})
    }    
  },
  

  getLessonNumber: async (req, res) => {

    const courseID = req.params.id;

    const CountHTML = await sequelizeConnection.query(
      `SELECT COUNT(topic_id) FROM topic WHERE course_id = '${courseID}';`
    );

    res.json({ courses: CountHTML[0][0].count });
  },


  updateProgress: async (req, res) => {

    // GET THE USER ID, THE CONTRIBUTION AMOUNT, 
    try {

      let { user_id, courseName, topic_id, contributionAmount } = req.body;

        //CHECK IF USER EXISTS IN PROGRESS TABLE
        // const getUserQuery = await sequelizeConnection.query(`SELECT user_id FROM progress WHERE user_id = '${user_id}' LIMIT 1`)
        // const retrievedUser = getUserQuery[0]

        // GET THE COURSE ID
        const courseIdQuery = await sequelizeConnection.query(`SELECT course_id FROM course WHERE course_name = '${courseName}'`);
        const courseId = courseIdQuery[0][0].course_id;

        // GET THE TOPICCS THAT ARE COMPLETED
        const getTopicsDoneQuery = await sequelizeConnection.query(`SELECT topics_done FROM progress WHERE course_id = '${courseId}' AND user_id = ${user_id}`);
        let topics_done = getTopicsDoneQuery ? getTopicsDoneQuery[0][0].topics_done : [];

         // GET THE PERCENTAGE
         const getPercentageQuery = await sequelizeConnection.query(`SELECT percentage FROM progress WHERE course_id = '${courseId}' AND user_id = ${user_id}`);
         let percentage = getPercentageQuery[0][0].percentage;

      if(topics_done != null){
              topic_id += '';
              if ( topics_done.indexOf(topic_id) == -1) { // topic quiz is not complete
                    topics_done = [...topics_done, topic_id]

                    if(parseInt(percentage) == 0) {
                        percentage = parseInt(contributionAmount);
                    } else {
                      let x = parseInt(percentage) + parseInt(contributionAmount);
                        percentage += parseInt(contributionAmount);
                        percentage = x

                        if(percentage >= 100){
                            percentage = 100
                        } 
                    }
                    
                    await sequelizeConnection.query(`UPDATE progress SET percentage = '${percentage}', topics_done = ARRAY[${topics_done}] WHERE course_id = '${courseId}' AND user_id = '${user_id}'`);

              } else {
                    percentage = parseInt(percentage);
                    if(percentage >= 100){
                        percentage = 100;
                    }
                    await sequelizeConnection.query(`UPDATE progress SET percentage = '${percentage}', topics_done = ARRAY[${topics_done}] WHERE course_id = '${courseId}' AND user_id = '${user_id}'`);
              }
          
            } else {
              topic_id += '';
              topics_done = [topic_id]

              if(parseInt(percentage) == 0) {
                        percentage = parseInt(contributionAmount);
                    } else {
                        percentage += parseInt(contributionAmount);
                        percentage = parseInt(percentage)

                        if(percentage >= 100){
                            percentage = 100
                        }
                }

              await sequelizeConnection.query(`UPDATE progress SET percentage = '${percentage}', topics_done = ARRAY[${topics_done}] WHERE course_id = '${courseId}' AND user_id = '${user_id}'`);
            
            }

         res.json({error:null, success: true, percentage});
         

    } catch(error){
        console.log(error)
        res.json({error: error.message, success: false, percentage: 0})
    }


  },

  getProgress: async (req, res) => {

    const userId = req.params.user_id

      try {
          // GET THE PROGRESS
          // const getProgressQuery = await sequelizeConnection.query('SELECT * FROM progress');
          const getProgressQuery = await sequelizeConnection.query(`select c.course_id,course_logo, course_name, percentage
          from course c, progress p
          WHERE c.course_id = p.course_id
          And user_id = '${userId}'`)

          const getProgress = getProgressQuery[0]

          res.json(getProgress)
      } catch(error) {
          console.log(error);
          res.json(error.message);
      }
  }




};
