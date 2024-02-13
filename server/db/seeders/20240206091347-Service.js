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
        logo: 'https://i.pinimg.com/564x/5b/4c/4e/5b4c4e201804705533a1d4dca155dfca.jpg',
        promo:
          'A personalized approach to each patient. A team of experienced cardiologists will conduct examinations with the most advanced equipment.',
        img: 'https://di-center.ru/upload/files/%D0%9A%D0%B0%D1%80%D0%B4%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dietetics',
        description:
          'Our dietetics service offers personalized nutrition plans for patients with various conditions, as well as those looking to improve their health through proper nutrition. Our team of qualified dietitians provides individual consultations, develops dietary recommendations, and helps patients establish healthy eating habits. We take into account the specific needs of patients and their conditions to help them achieve their goals in healthy eating.',
        logo: 'https://i.pinimg.com/564x/6f/e4/53/6fe4530735f9e88055c55127f2a98e55.jpg',
        promo: 'Extensive experience in modern dietetics and hundreds of happy patients.',
        img: 'https://familydoctor.ru/upload/medialibrary/7c0/vv56outam85irx3sz6fi8tiyy99vj7pt/dietolog.jpg',
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
        logo: 'https://i.pinimg.com/564x/19/4f/5e/194f5ea1bdbcf418cd97aacb7e3bea4e.jpg',

        promo: 'Qualified Specialists',
        img: 'https://centr-hirurgii-spb.ru/images/article/konsultatsiya-khirurga1.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pediatrics',
        description: `Pediatric Services at Our Private Clinic

At our private clinic, we take pride in offering comprehensive pediatric services designed to support the healthy growth and development of your child. Our dedicated pediatric team provides personalized, compassionate care in a welcoming, child-friendly environment that is both comforting and reassuring for both the young ones and their parents.

We believe that preventative care is the cornerstone of pediatric health. Therefore, our services encompass routine well-child check-ups, where we monitor growth and development, conduct screenings for early detection of health issues, and administer immunizations to protect against common childhood diseases.

Our experienced pediatricians specialize in the diagnosis and treatment of a wide range of childhood illnesses and conditions. From common colds and flu to more complex medical issues, we are equipped with state-of-the-art facilities and the latest medical knowledge to ensure your child receives the best possible care.

For those unexpected illnesses or injuries, our clinic provides urgent care services for prompt attention when your child needs it the most. Our multidisciplinary approach ensures that each child benefits from thorough, holistic care that addresses their physical, emotional, and developmental needs.

We understand that parenting comes with many questions and concerns. Our team is here to offer expert advice, guidance, and education to empower you to make informed decisions about your child's health and wellness. We value the opportunity to partner with parents on the journey of nurturing a healthy, happy child.

Whether your visit is for a routine check-up, vaccination, or a concern about your child's health, we are committed to providing the highest standard of pediatric care. Our goal is to be a trusted resource for your family throughout your child's formative years, ensuring they have the best start in life.`,
        promo: 'With care for your little one',
        logo: 'https://i.pinimg.com/564x/c8/d7/3e/c8d73ed58c10331fe1329a93f648559e.jpg',
        img: 'https://lh3.googleusercontent.com/proxy/UnEJ1CZCRzHrkaKFQ_OxIzljJmiu2WNm9AKk5rw2b0PiP3rsmGJ_Ix7MINDOL70cpKXm3dqLAfH2MNU-LY70op6VhFSrw-_F',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  }
};
