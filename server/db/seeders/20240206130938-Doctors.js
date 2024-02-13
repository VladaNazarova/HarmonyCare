'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: '1@healthcare.com',
        login: 'Dr. House',
        password: '$2b$10$yDNxDve4ykXI3ux1cSapfulU1H7bFvxDlMuHPM52OP5YDL8weSfN.',
        role: 'doctor',
        phone_number: '+9998887766',
        doctor_id: 1,
        specialization: 'Cardiology',
        experience: 15,
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
        experience: 7,
        img: 'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: '2@healthcare.com',
        login: 'Bibo',
        password: 321,
        role: 'doctor',
        phone_number: '+9998887755',
        doctor_id: 2,
        specialization: 'Surgery',
        experience: 7,
        img: 'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'admin@healthcare.com',
        login: 'Admin',
        password: '$2b$10$pL8kQmVx9AFW/gq.HrwZPuFX0p7a.gkqgoDOvCSivZvoYUZPYZ0JO',
        role: 'admin',
        phone_number: null,
        doctor_id: null,
        specialization: 'admin',
        experience: null,
        img: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
