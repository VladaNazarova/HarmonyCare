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
        price: '100$',
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
        price: '100$',
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
        price: '100$',
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
        price: '100$',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ophthalmologist',
        description:
          'At our private clinic, we understand the importance of clear vision and healthy eyes in your daily life. Our ophthalmology service is dedicated to providing comprehensive eye care that exceeds your expectations. From routine eye exams to advanced diagnostic tests and cutting-edge treatments for various eye conditions, our skilled ophthalmologists employ the latest technology and techniques to ensure you receive the highest standard of care. Whether you need prescription lenses, are considering corrective surgery, or seeking treatment for an eye disease, our team is here to support your vision health every step of the way. Experience personalized eye care, designed to bring your world into clearer focus.',
        logo: 'https://i.pinimg.com/564x/82/58/6f/82586fa9578ad6719a64992b03246194.jpg',
        promo: 'See Life Clearly!',
        img: 'https://russdoc.ru/wp-content/uploads/2017/07/ophthalmology.jpg',
        price: '100$',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Urology',
        description:
          'Our private clinics urology service is dedicated to providing advanced and compassionate care for a wide range of urological conditions. Our team of experienced urologists utilizes the latest diagnostic tools and treatment techniques to address issues affecting the urinary tract, bladder, kidneys, and male reproductive organs. From common concerns such as urinary tract infections and kidney stones to complex conditions like prostate cancer and male infertility, were committed to offering personalized solutions tailored to each patients needs. Our goal is to ensure your comfort, improve your health, and enhance your quality of life with professional, discreet, and effective urological care.',
        logo: 'https://cdn2.iconfinder.com/data/icons/medicine-pt-11/100/113_-_kidney_organ_excretory_system_anatomy_urine-1024.png',
        promo: 'Empowering Your Health, Enhancing Your Life!',
        img: 'https://med-kontakt.ru/upload/iblock/2a8/Depositphotos_124360482_l_2015.jpg',
        price: '100$',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gastroenterology',
        description:
          'Our private clinic’s gastroenterology service is at the forefront of diagnosing and treating digestive and gastrointestinal disorders with compassion and precision. Our dedicated team of gastroenterologists combines their vast expertise with the latest in diagnostic technology to offer effective treatment plans for a wide range of conditions, from acid reflux and peptic ulcers to more complex diseases such as Crohns, colitis, and cancers of the digestive system. Each patients care plan is tailored to their unique needs, focusing not only on symptom relief but also on long-term wellness and prevention. We are committed to providing a comfortable and confidential environment where you can discuss your needs and concerns openly. Let us guide you on the path to better digestive health and improved quality of life.',
        logo: 'https://cdn1.flamp.ru/6c6f065ef1d57871c3d80768429ae82a.jpeg',
        promo: 'Restoring Digestive Health, Enhancing Lifes Pleasures!',
        img: 'https://kaskadclinic.by/files/resized/912x540-ru-gastro_912x540.jpg',
        price: '100$',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dermatology',
        description:
          'Our cardiology service provides comprehensive care for patients with heart and vascular diseases. Our team of experienced cardiologists conducts diagnosis, treatment, and prevention of cardiovascular diseases using modern equipment and techniques. We offer a wide range of services, including electrocardiography, echocardiography, doppler ultrasound, MRI and CT scanning of the heart, as well as consultations on cardiovascular disease prevention. Our goal is to ensure our patients receive prompt and effective treatment, as well as help them maintain a high level of heart health.',
        logo: 'https://i.pinimg.com/564x/16/23/55/162355b8da7fa6d0920f665799e41232.jpg',
        promo: 'Healthy Skin, Radiant Confidence!',
        img: 'https://skinor.ru/files/content/2019/12/1576801793.jpg',
        price: '100$',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  }
};
