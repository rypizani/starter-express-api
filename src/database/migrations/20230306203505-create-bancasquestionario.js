"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("questionario", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      p: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      r1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      r2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      r3: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      r4: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      r5: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      r6: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("questionario");
  },
};
