'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.addColumn(
    'questionarios',
    'rota',
    
    {
      type: Sequelize.STRING,

    }
    )
  },

  async down (queryInterface, Sequelize) {
  return queryInterface.removeColumn(
    'questionarios',
    'rota',
    
  );
  }
};