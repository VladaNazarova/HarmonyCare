'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      promo: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.ENUM('patient', 'doctor'),
        allowNull: false
      },
      specialization: {
        type: Sequelize.STRING,
        allowNull: true
      },
      experience: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      img: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Services');
  }
};
