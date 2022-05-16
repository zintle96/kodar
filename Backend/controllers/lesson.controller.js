const sequelizeConnection = require("../config/db.config");

module.exports.lessonController = {
  lessonContent: async (req, res) => {

    try{

      const { topic_id, lesson_id } = req.params;

      if( isNaN(topic_id) || isNaN(lesson_id) ){
          throw new Error('Lessons do not exist for the specified topic')
      }

      //query a specific lesson
      const lessonContent = await sequelizeConnection.query(
        `select lesson_name, lesson_content, lesson_examples, more_info from lesson where lesson_id = '${lesson_id}'`
      );
  
      //query from topic
      const topic = await sequelizeConnection.query(`select topic_name, topic_desc
                                                                  from topic where topic_id = ${topic_id}`)
  
      console.log("topic: ", topic[0], "lessons are:", lessonContent[0]);
      
      if(!topic[0].length || !lessonContent[0].length){
        throw new Error('Lessons do not exist for the specified topic');
      }
  
      res.json({ topic: topic[0], lesson: lessonContent[0] });

    } catch(error) {
      console.log(error.message)
        res.json({ error: error.message, topic: null, lesson: null })
    }
 
  },
};
