'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('Users', {
     id:{
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false,
     },
     name:{
       type: Sequelize.STRING,
       allowNull: false,
     },
     email:{
       type: Sequelize.STRING,
       allowNull: false,
       unique: true
     },
     password: {
       type: Sequelize.STRING,
       allowNull: false
     },
     fixedIncome:{
       type: Sequelize.BOOLEAN,
       allowNull: false,
     },
     income:{
       type: Sequelize.DECIMAL
     },
     createdAt:{
       type: Sequelize.DATE,
       allowNull: false
     },
     updatedAt:{
       type: Sequelize.DATE,
       allowNull: false
     }
   })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users')
  }
};
