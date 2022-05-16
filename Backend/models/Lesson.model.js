const sequelizeConnection = require('../config/db.config');
const Sequelize = require('sequelize');
const DataTypes = Sequelize;

const Lesson = sequelizeConnection.define('lesson',{
    lesson_id :{
        primaryKey: true
    },
	topic_id :{
        type: DataTypes.INTEGER
    },
	lesson_name :{
        type: DataTypes.STRING,
        allowNull: false
    },
	lesson_content: {
        type: DataTypes.ARRAY(DataTypes.JSON)
    },
	lesson_examples:{
        type: DataTypes.ARRAY(DataTypes.JSON)
    },
	more_info :{
        type: DataTypes.STRING 
    }
})

module.exports = Lesson;
