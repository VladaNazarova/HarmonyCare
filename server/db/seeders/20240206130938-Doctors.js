'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: '1@healthcare.com',
        login: 'Dr. House',
        password: 123,
        role: 'doctor',
        phone_number: '+9998887766',
        doctor_id: 1,
        specialization: 'cardiology',
        experience: 1,
        img: 'https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: '2@healthcare.com',
        login: 'Dr. Nadine',
        password: 321,
        role: 'doctor',
        phone_number: '+9998887755',
        doctor_id: 2,
        specialization: 'Dietetics',
        experience: 2,
        img: 'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
