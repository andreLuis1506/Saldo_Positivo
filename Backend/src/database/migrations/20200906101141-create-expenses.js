'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Expenses', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      title:{
        type: Sequelize.STRING,
        allowNull: false
      },
      description:{
        type: Sequelize.TEXT,
        allowNull: true
      },
      value:{
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      level: {
        type: Sequelize.STRING,
        allowNull: false
      },
      monthId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Months', key: 'id'}
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
    return queryInterface.dropTable('Expenses')
  }
};
