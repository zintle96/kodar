const sequelizeConnection = require('../config/db.config');
const { Sequelize } = require('sequelize');
const { DataTypes } = Sequelize // GETS THE DataTypes Object, used to set data types of fields

const Courses = sequelizeConnection.define('courses',{
    course_id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    course_name:{
        type:DataTypes.VARCHAR(255),
        allowNull:false
    },
    course_logo:{
        type:DataTypes.VARCHAR(255),
        allowNull:true
    }
});

module.exports = Courses;