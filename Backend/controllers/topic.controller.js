const sequelizeConnection = require("../config/db.config");

// //get topic model
// const topic_model = require('../models/Topic.model');

module.exports.topicController = {
  
  topic: async (req, res) => {

    try {
      const coursename = req.params.coursename;

      //query from topic
      const topic = await sequelizeConnection.query(`select t.topic_id,topic_name,topic_desc,c.course_name 
              from topic t,course c 
              where t.course_id = c.course_id 
              AND c.course_name='${coursename}' order by t.topic_id`);

      if(!topic[0].length) {
          throw new Error('course name is not recognized.')
      }
  
      console.log("topic: ", topic[0]);
      res.json({error: null, topics: topic[0]});

    } catch(error) {
      console.log(error)
      res.json({error: error.message, topics: []})
    }
  
  },

  lessons: async (req, res) => {
    try {

        const topic_id = req.params.topic_id;
        //query from lesson table
        const lesson = await sequelizeConnection.query(
          `select * from lesson where topic_id = ${topic_id} order by lesson_id`
        );
        console.log("lesson: ", lesson[0]);

        if( !lesson[0] ) {
            throw new Error('Lesson is not recognized')
        }

        res.json(lesson[0]);

    }catch(error) {
      console.log(error)
      res.json(error.message)
    }
   
  }
};
