'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Months', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      income:{
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model: 'Users', key: 'id'}
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
    return queryInterface.dropTable('Months');
  }
};
