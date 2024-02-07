'use strict';

/**
 * @type {import('sequelize-cli').Migration}
 */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services', [
      {
        name: 'Cardiology',
        description:
          'Our cardiology service provides comprehensive care for patients with heart and vascular diseases. Our team of experienced cardiologists conducts diagnosis, treatment, and prevention of cardiovascular diseases using modern equipment and techniques. We offer a wide range of services, including electrocardiography, echocardiography, doppler ultrasound, MRI and CT scanning of the heart, as well as consultations on cardiovascular disease prevention. Our goal is to ensure our patients receive prompt and effective treatment, as well as help them maintain a high level of heart health.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dietetics',
        description:
          'Our dietetics service offers personalized nutrition plans for patients with various conditions, as well as those looking to improve their health through proper nutrition. Our team of qualified dietitians provides individual consultations, develops dietary recommendations, and helps patients establish healthy eating habits. We take into account the specific needs of patients and their conditions to help them achieve their goals in healthy eating.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Surgery',
        description:
          `Our Surgery Service at Clinic Name is dedicated to providing state-of-the-art surgical care with a focus on patient safety and satisfaction. We feature a team of highly trained and board-certified surgeons who specialize in a wide range of procedures, from minimally invasive laparoscopic surgery to complex open surgeries.\n\n` +
          `Equipped with advanced surgical facilities and the latest technology, we strive to offer the best possible outcomes for our patients. We prioritize minimally invasive techniques whenever appropriate, which often result in smaller incisions, less pain, and quicker recovery times.\n\n` +
          `Our surgeons collaborate closely with a multidisciplinary team of anesthesiologists, nurses, and rehabilitation specialists to ensure a holistic approach to patient care, from pre-operative planning to post-operative recovery and follow-up.\n\n` +
          `At Clinic Name, we understand that surgery can be a significant event in a person's life. That's why we are committed to providing compassionate care and comprehensive support throughout the entire surgical process. Our goal is to not only treat the immediate surgical needs but also to enhance the overall well-being and quality of life for our patients.\n\n` +
          `Whether you're coming in for a routine procedure or something more complex, you can have confidence in the expertise and dedication of our Surgery Service team at Clinic Name.`,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  }
};
