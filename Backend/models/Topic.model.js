
const sequelizeConnection = require("../config/db.config");
const {Sequelize} = require('sequelize')
const  {DataTypes}  = Sequelize


const Topic = sequelizeConnection.define( 'Topic',{
   
    topic_id :{
        primaryKey : true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    }, 

    
    topic_name :{
        type: DataTypes.VARCHAR(255),
        allowNull: false
    },
        
    
    topic_desc:{
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true
    },

  course_id:{
    type: DataTypes.INTEGER,
    
  }
})

module.exports = Topic;
