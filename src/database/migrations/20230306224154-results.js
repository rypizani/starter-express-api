"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("results", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      result1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      result2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      result3: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      result4: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      result5: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      result6: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      result7: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      result8: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      result9: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      result10: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      result1: {
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
    await queryInterface.dropTable("results");
  },
};