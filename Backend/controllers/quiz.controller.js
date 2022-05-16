//database connection
const sequelizeConnection = require("../config/db.config");

module.exports.quizController = {
  getAllQuiz: async (req, res) => {

    try {

      const topic_id = req.params.topic_id;

      const quizes = await sequelizeConnection.query(`SELECT topic_name,course_logo,question_text,answer_options
        FROM topic t,question q,course c
        where t.topic_id = q.topic_id 
        AND t.course_id = c.course_id
        AND t.topic_id = ${topic_id};`);

        if(quizes[0].length == 0) {
            throw new Error('Quiz not found.')
        }

      res.json({error: null, quiz: quizes[0]});

    } catch(error) {
      res.json({error: error.message, quiz: []})
    }
   
  },
  
  getTopicsDoneQuery: async (req, res) => {

    try {

      const {user_id, coursename} = req.params;
      const getCourseIdQuery = await sequelizeConnection.query(`select course_id FROM course WHERE course_name = '${coursename}'`)
      const courseId = getCourseIdQuery[0][0]['course_id']

      const quizesDone = await sequelizeConnection.query(`select topics_done 
      from progress where user_id = ${user_id} AND course_id = '${courseId}'`);
      res.json(quizesDone[0][0].topics_done)

    } catch(error) {
      res.json(error.message)
    }
    
  }
  
};
